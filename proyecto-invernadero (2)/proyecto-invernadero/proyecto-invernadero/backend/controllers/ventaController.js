const db = require('../config/db');

// ========== FUNCIONES ORIGINALES (NO CAMBIAN) ==========

// Vender producto
const venderProducto = (req, res) => {
    const { id_producto, cantidad, vendedor_nombre, producto_nombre } = req.body;
    db.query('SELECT precio, stock FROM productos WHERE id_producto = ?', [id_producto], (err, results) => {
        if (err || results.length === 0) return res.status(500).json(err);
        const { precio, stock } = results[0];
        if (stock < cantidad) return res.status(400).json({ error: "Sin stock" });

        db.query('UPDATE productos SET stock = stock - ? WHERE id_producto = ?', [cantidad, id_producto], () => {
            const totalVenta = precio * cantidad;
            db.query('INSERT INTO ventas (producto_nombre, total, vendedor_nombre) VALUES (?, ?, ?)', [producto_nombre, totalVenta, vendedor_nombre], (errV) => {
                if (errV) return res.status(500).json(errV);
                res.json({ mensaje: "Venta exitosa" });
            });
        });
    });
};

// Historial de ventas (TODAS)
const getHistorialVentas = (req, res) => {
    const sql = "SELECT producto_nombre, total, vendedor_nombre, DATE_FORMAT(fecha_venta, '%d/%m/%Y %H:%i') as fecha FROM ventas ORDER BY fecha_venta DESC";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Ganancias del día
const getGananciasHoy = (req, res) => {
    const sql = "SELECT IFNULL(SUM(total), 0) AS total FROM ventas WHERE DATE(fecha_venta) = CURDATE()";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results[0]);
    });
};

// ========== NUEVAS FUNCIONES PARA FILTROS (SOLO AGREGAR ESTO) ==========

// Historial de ventas con filtros
const getHistorialVentasConFiltros = (req, res) => {
    const { fechaInicio, fechaFin, vendedor, producto } = req.query;
    
    let sql = `
        SELECT producto_nombre, total, vendedor_nombre, 
               DATE_FORMAT(fecha_venta, '%d/%m/%Y %H:%i') as fecha
        FROM ventas 
        WHERE 1=1
    `;
    
    const params = [];
    
    if (fechaInicio) {
        sql += ` AND DATE(fecha_venta) >= ?`;
        params.push(fechaInicio);
    }
    
    if (fechaFin) {
        sql += ` AND DATE(fecha_venta) <= ?`;
        params.push(fechaFin);
    }
    
    if (vendedor && vendedor !== 'todos') {
        sql += ` AND vendedor_nombre = ?`;
        params.push(vendedor);
    }
    
    if (producto && producto !== 'todos') {
        sql += ` AND producto_nombre = ?`;
        params.push(producto);
    }
    
    sql += ` ORDER BY fecha_venta DESC`;
    
    db.query(sql, params, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Obtener lista de vendedores únicos
const getVendedores = (req, res) => {
    db.query('SELECT DISTINCT vendedor_nombre FROM ventas ORDER BY vendedor_nombre', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results.map(r => r.vendedor_nombre));
    });
};

// Obtener lista de productos vendidos únicos
const getProductosVendidos = (req, res) => {
    db.query('SELECT DISTINCT producto_nombre FROM ventas ORDER BY producto_nombre', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results.map(r => r.producto_nombre));
    });
};

// ========== EXPORTAR (agregar las nuevas funciones) ==========
module.exports = { 
    venderProducto, 
    getHistorialVentas, 
    getGananciasHoy,
    getHistorialVentasConFiltros,  // NUEVA
    getVendedores,                  // NUEVA
    getProductosVendidos            // NUEVA
};
import { supabase } from "./supabase";

export async function obtenerGastos() {
  const { data, error } =
    await supabase
      .from("gastos")
      .select("*")
      .order("id", {
        ascending: false,
      });

  if (error) throw error;

  return data;
}

export async function crearGasto(
  gasto
) {
  const { data, error } =
    await supabase
      .from("gastos")
      .insert([gasto]);

  if (error) throw error;

  return data;
}

export async function eliminarGasto(
  id
) {
  const { error } =
    await supabase
      .from("gastos")
      .delete()
      .eq("id", id);

  if (error) throw error;
}
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  private users: any[] = [];

  findAll() {
    return this.users;
  }

  create(user: any) {
    this.users.push(user);
    return user;
  }

  findByName(name: string) {
    return this.users.filter(u => u.name === name);
  }

  update(id: number, user: any) {
    this.users[id] = user;
    return this.users[id];
  }

  delete(id: number) {
    return this.users.splice(id, 1);
  }

  deleteByName(name: string) {
    this.users = this.users.filter(u => u.name !== name);
    return this.users;
  }
}

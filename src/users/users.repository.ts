import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
  private users = [
    {
      id: 1,
      email: 'prueba@mail.com',
      name: 'mario',
      password: '12po',
      address: 'calle falsa 123',
      phone: '123456789',
      country: 'Argentina',
      city: 'Buenos Aires',
    },
    {
      id: 2,
      email: 'otro@mail.com',
      name: 'lucia',
      password: 'abcd',
      address: 'otra calle 456',
      phone: '987654321',
      country: 'Argentina',
      city: 'Córdoba',
    }
  ];

    // 🔹 GET /products
    async getPaginatedUsers(page: number, limit: number) {
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginated = this.users.slice(start, end);

  return {
    total: this.users.length,
    page,
    limit,
    data: paginated
  };
}

  // 🔹 GET /users/:id
  async getUserById(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user) return null;

    const { password, ...safeUser } = user;
    return safeUser;
  }

  // 🔹 DELETE /users/:id
  async deleteUserById(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }

    // 🔹 POST /users
    async createUser(data) {
    const newUser = {
      id: this.users.length + 1,
      ...data,
    };
    this.users.push(newUser);
    return newUser; 
}

// 🔹 PUT /users/:id
async updateUserById(id: number, data) {
  const index = this.users.findIndex(user => user.id === id);
  if (index === -1) return null;

  const updatedUser = {
    ...this.users[index],
    ...data,
  };
  this.users[index] = updatedUser;
  return updatedUser;   
}

    // 🔹 GET /users/cofee
    async getCofee() {
        return 'no se hacer cafe, solo te y mate, jaja';
    }       

}

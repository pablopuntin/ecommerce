import { Injectable } from "@nestjs/common";


@Injectable()
export class ProductsRepository {
    private products = [
        {
id:1,

name:'lavandina',

description: 'lavandina concentrada 1L',

price: 500,

stock: true,

imgUrl: 'https://example.com/lavandina.jpg',
        },
        {
id:2,

name:'Fideo',

description: 'fideo x 1 kg.',

price: 2500,

stock: true,

imgUrl: 'https://example.com/fideo.jpg',
        },
        {
id:3,

name:'Arroz',

description: 'aloz gallo olo',

price: 1500,

stock: true,

imgUrl: 'https://example.com/arrroz.jpg',
        }

    ];

    // 🔹 GET /products
    async getPaginatedProducts(page: number, limit: number) {
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginated = this.products.slice(start, end);

  return {
    total: this.products.length,
    page,
    limit,
    data: paginated
  };
}

  

    // 🔹 GET /products/:id
    async getProductById(id: number) {
        const product = this.products.find(product => product.id === id);
        if (!product) return null;
        return product;
    }

    // 🔹 POST /products
    async createProduct(data) {
        const newProduct = {
            id: this.products.length + 1,
            ...data,
        };
        this.products.push(newProduct);
        return newProduct; 
    }

    // 🔹 PUT /products/:id
    async updateProductById(id: number, data) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) return null;

        this.products[index] = { ...this.products[index], ...data };
        return this.products[index];
    }

    // 🔹 DELETE /products/:id
    async deleteProductById(id: number) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) return false;

        this.products.splice(index, 1);
        return true;
    }

    


}
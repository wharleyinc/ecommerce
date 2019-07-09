export class Product {
    id: number;
    name: string;
    price: number;
    pictureUrl: string;
    category: string;

    constructor(id: number, name: string, price: number, pictureUrl: string, category: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.pictureUrl = pictureUrl;
        this.category = category;
    }
}
import { Product } from './product.model';

export class ProductOrder {
    product: Product;
    quantity: number;
    size: string;

    constructor(product: Product, quantity: number, size: string) {
        this.product = product;
        this.quantity = quantity;
        this.size = size;
    }
}
import { Product } from './product';

export class CartItem {
    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;
    quantity: number;
    unitsInStock: number;

    constructor(product: Product) {
        this.id = product.id;
        this.name = product.name;
        this.imageUrl = product.imgeUrl;
        this.unitPrice = product.unitPrice;
        this.unitsInStock = product.unitsInStock;
        this.quantity = 1;
    }

}

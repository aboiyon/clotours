import { Product } from "src/app/features/models/products.product";

export interface CartItem {
    product: Product;
    quantity: number;
}

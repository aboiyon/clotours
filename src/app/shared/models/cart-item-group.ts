import { Product } from "src/app/features/models/products.product";

export interface CartItemGroup {
    product: Product;
    quantity: number;
}

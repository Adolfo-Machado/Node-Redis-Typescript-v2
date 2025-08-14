// services/getProducts.ts
import { Product } from "../models/schema";

export const fetchProductsMock = async (): Promise<Product[]> => {
    const time = Math.random() * 5000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Produto 1' },
                { id: 2, name: 'Produto 2' },
                { id: 3, name: 'Produto 3' },
                { id: 4, name: 'Produto 4' },
            ]);
        }, time);
    });
};

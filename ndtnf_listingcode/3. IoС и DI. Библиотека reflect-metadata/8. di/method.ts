interface IProduct {
    id: number;
    name: string;
    price: number;
}

class Cart {
    add(product: IProduct, quantity: number) {
        // ...
    }
}

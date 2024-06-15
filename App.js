import { Card } from "./src/Components/Card/Card.js";

function main() {
    let products;
    fetch('http://localhost:3000/products')
    .then((response) => response.json())
    .then((data) => generateProductsCard(data))
    .catch((error) => console.log(error));
}

function generateProductsCard(data) {
    return data?.map((product) => {
        Card({
            key: product?.id,
            rootId: 'products-root',
            name: product?.name,
            imgUrl:product?.image,
            price: product?.price
        });
    })
}

main();

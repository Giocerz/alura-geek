export function Card({ key, rootId = 'root', name, imgUrl, price }) {
    const rootElement = document.getElementById(rootId);

    if (!rootElement) {
        console.error(`rootElement called with id '${rootId}' don't exist.`)
        return;
    }

    const handleButtonDelete = () => {
        fetch(`http://localhost:3000/products/${key}`, {
            method: 'DELETE',
        }).then((response) => location.reload())
        .catch((error) => console.log(error));
    };

    const Component = document.createElement('div');
    Component.innerHTML = `<article class="product-card">
                        <img class="product-image" src="${imgUrl}" alt="${name}-image"/>
                        <h1>${name}</h1>
                        <footer>
                            <p class="product-price">$ ${price}</p>
                            <button class="delete-product-btn"><img src="./src/images/Vector.svg"/></button>
                            </footer>
                        </article>`;
    const button = Component.querySelector('.delete-product-btn');
    button.addEventListener('click', handleButtonDelete);
    rootElement.appendChild(Component.firstChild);
}
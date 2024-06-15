function sendForm(e) {
    const form = document.querySelector('form');
    const name = form.querySelector('#name').value;
    const price = form.querySelector('#price').value;
    const image = form.querySelector('#image').value;

    const data = {
        "name" : name,
        "price" : price,
        "image" : image
    }

    console.log(data);

    fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : "aplication/json"
        }
    }).then((response) => response.json())
    .catch((error) => console.log(error));
}

function clearForm() {
    const form = document.querySelector('form');
    form.querySelector('#name').value = '';
    form.querySelector('#price').value = '';
    form.querySelector('#image').value = '';

}

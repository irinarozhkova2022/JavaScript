const data = JSON.parse(dataProduct);
const content = document.querySelector('.product');

data.forEach(el => {
    const divBox = document.createElement('div');
    divBox.classList.add('card__box');
    const image = document.createElement('img');
    image.classList.add('card__image');
    const description = document.createElement('h3');
    description.classList.add('card__description');
    const div = document.createElement('div');
    div.classList.add('card__text');
    const price = document.createElement('p');
    price.classList.add('card__price');
    const priceValue = document.createElement('span');
    priceValue.classList.add('card__price__value');
    const color = document.createElement('p');
    color.classList.add('card__color');
    const size = document.createElement('p');
    size.classList.add('card__size');
    const quantity = document.createElement('p');
    quantity.classList.add('card__quantity');
    const quantityNum = document.createElement('span');
    quantityNum.classList.add('card__quantity__num');

    image.src = el.image;
    description.textContent = el.description;
    price.textContent = "Price: ";
    priceValue.textContent = el.price;
    color.textContent = "Color: " + el.color;
    size.textContent = "Size: " + el.size;
    quantity.textContent = "Quantity:";
    quantityNum.textContent = el.quantity;

    content.appendChild(divBox);
    divBox.appendChild(image);
    divBox.appendChild(div);
    div.appendChild(description);
    div.appendChild(price);
    price.appendChild(priceValue)
    div.appendChild(color);
    div.appendChild(size);
    div.appendChild(quantity);
    quantity.appendChild(quantityNum)
});
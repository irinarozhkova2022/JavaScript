const data = JSON.parse(dataProducts);


const contentBox = document.querySelector('.products');

data.forEach(element => {
    const box = document.createElement('div');
    const img = document.createElement('img');
    const good = document.createElement('div');
    const goodName = document.createElement('h3');
    const goodText = document.createElement('p');
    const goodPrice = document.createElement('h3');
    
    img.src = element.img;
    goodName.textContent = element.goodName;
    goodText.textContent = element.goodText;
    goodPrice.textContent = element.goodPrice;

    contentBox.appendChild(box);
    box.appendChild(img);
    box.appendChild(good);
    good.appendChild(goodName);
    good.appendChild(goodText);
    good.appendChild(goodPrice);
});
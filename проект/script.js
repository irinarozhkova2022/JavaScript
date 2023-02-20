const products = JSON.parse(productInfo);
console.log(products);

const content1 = document.querySelector('.content1');

products.forEach(element => {
    const contentBox = document.createElement('div');
    contentBox.style.border = '1px solid white';
    contentBox.style.backgroundColor = 'url';
    contentBox.style.display = 'grid';
    contentBox.style.gridColumn = '360px 360px 360px';
    contentBox.style.gridRow = '550px 550px';
    contentBox.style.gap = '10px';
    contentBox.style.justifyContent = 'center';
    contentBox.style.transition = 'transform 1s';
    contentBox.style.transform = 'scale(1.1)';
    
    const image = document.createElement('img');
    // image.style.position = 'absolute';
    image.style.display = 'flex';
    image.style.flexWrap = 'wrap';
    image.style.justifyContent = 'center';
    image.style.alignItems = 'center';
    image.style.alignContent = 'center';
    image.style.flexDirection = 'row';
    image.style.width = '50%';
        
    const name = document.createElement('h3');
    name.style.font = '16px Roboto';
    name.style.textAlign = 'left';
    name.style.display = 'flex';
    name.style.justifyContent = 'start';
    name.style.gap = '10px';
    name.style.flexDirection = 'column';
    name.style.flexWrap = 'nowrap';
    name.style.alignItems = 'start';
    name.style.background = '#F8F8F8';
    name.style.borderRadius = '10px';
    name.style.color = '#000000';
    
    const text = document.createElement('p');
    text.style.color = '#5D5D5D';
    text.style.font = '14px Roboto';
    text.style.textAlign = 'left';
    text.style.display = 'flex';
    text.style.justifyContent = 'start';
    text.style.gap = '10px';
    text.style.flexDirection = 'column';
    text.style.flexWrap = 'nowrap';
    text.style.alignItems = 'start';
    text.style.background = '#F8F8F8';
    text.style.borderRadius = '10px';
    text.style.color = '#000000';
    
    const price = document.createElement('h3');
    price.style.color = '#F16D7F';
    price.style.font = '16px Roboto';
    price.style.textAlign = 'left';
    price.style.display = 'flex';
    price.style.justifyContent = 'start';
    price.style.gap = '10px';
    price.style.flexDirection = 'column';
    price.style.flexWrap = 'nowrap';
    price.style.alignItems = 'start';
    price.style.background = '#F8F8F8';
    price.style.borderRadius = '10px';
    price.style.color = '#000000';
    
    image.src = element.image;
    name.textContent = element.name;
    text.textContent = element.text;
    price.textContent = element.price;

    content1.appendChild(contentBox);
    contentBox.appendChild(image);
    contentBox.appendChild(name);
    contentBox.appendChild(text);
    contentBox.appendChild(price);
});
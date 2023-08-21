let total = 0;

function handleClickDiv(target){
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    total = parseInt(total) + parseInt(price);
    const totalPrice = document.getElementById('total-price').innerText = total;  
    
    
}


let total = 0;

function handleClickDiv(target) {
    var purchaseBtn = document.getElementById('purchase-btn');
    var couponBtn = document.getElementById('coupon-btn');
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(price);
    const totalPrice = document.getElementById('total-price').innerText = total;
    if(totalPrice > 0){
        purchaseBtn.removeAttribute('disabled');
    }
    if(totalPrice >= 200){
        couponBtn.removeAttribute('disabled');
    }
}



// document.getElementById('coupon-value').addEventListener('input',function(){
//     var totalPrice = document.getElementById('total-price').textContent;
//     console.log(totalPrice);
//     var couponBtn = document.getElementById('coupon-btn');
// })



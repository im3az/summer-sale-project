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
    var discountAmount = parseFloat(document.getElementById('discount-amount').innerText);
    var grandTotal = parseFloat(document.getElementById('grand-total').innerText);
    
    grandTotal = totalPrice - discountAmount;

    document.getElementById('grand-total').innerText = grandTotal;
    if (totalPrice > 0) {
        purchaseBtn.removeAttribute('disabled');
    }
    if (totalPrice >= 200) {
        couponBtn.removeAttribute('disabled');
    }

    document.getElementById('coupon-btn').addEventListener('click', function () {
        var couponInput = document.getElementById('coupon-input').value;

        if (couponInput === 'SELL200') {
            discountAmount = totalPrice * 0.20;
            document.getElementById('discount-amount').innerText = discountAmount;
            grandTotal = totalPrice - discountAmount;
            document.getElementById('grand-total').innerText = grandTotal;
            // grandTotal = totalPrice - parseFloat(discountAmount);
            // console.log(grandTotal);
        }

    })
}

// function goHome(){
//     window.location.href = 'http://127.0.0.1:5500/index.html'
// }



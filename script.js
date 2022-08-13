let allTotal = 0;
function addToCart(element) {

    let mainEl = element.closest('.single-item');
    let name = mainEl.querySelector('h3').innerText;
    let price = mainEl.querySelector('p').innerText.substring(1);
    let quantity = mainEl.querySelector('input').value;
    

   
    quantity = parseInt(quantity);
    price = parseInt(price);
    let total = price*quantity;
    allTotal += total;
    if(quantity > 0){

    element.innerText = "Added";
    element.setAttribute('disabled', 'true');
    
    let cart = document.querySelector('.cart-items');
    cart.innerHTML += `<div class="cart-single-item">
        <h3>${name}</h3>
         <h4>$${price} x ${quantity} = $<span>${total}</span></h4> 
         <button onclick="remove(this)">Delete</button>
            </div>`;
        }
        
    let sum = document.querySelector('.cart .total');
    sum.innerHTML = `<h3> Total: $${allTotal} </h3>`;
}

function remove(element) {
    let mainEl = element.closest('.cart-single-item');
    let price  = mainEl.querySelector('span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');
    price = parseInt(price);
    
   
    allTotal -= price;

    let sum = document.querySelector('.cart .total');
    sum.innerHTML = `<h3> Total: $${allTotal} </h3>`;

    mainEl.remove();

    vegetables.forEach(function (vege) {
        let itemName = vege.querySelector('.si-content h3').innerText;
        if(itemName === name){
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = 'Add';
        }
    });


   
    
}
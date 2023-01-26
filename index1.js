 
const quantityInput = document.querySelector('.select-quantity');
const colorInput = document.querySelector('.select-color');
const priceInput = document.querySelector('.price');
const calculate = document.querySelector('.calculate');


const cartFinalPrice = document.querySelector('.final-price-amount');
const cartFinalQuantity = document.querySelector('.final-quantity-amount');
const cartFinalColor = document.querySelector('.color-swatch');


calculate.addEventListener('click',() => {

    let total = quantityInput.value * priceInput.textContent.split(".").join("");
    let totalLocaleString = total.toLocaleString("es-CL", {style: "decimal", currency: "CLP", miniumFractionDigits: 0 });

    cartFinalColor.style.background = colorInput.value;
    cartFinalQuantity.textContent = quantityInput.value;
    cartFinalPrice.textContent = '$' + totalLocaleString;

});

colorInput.addEventListener('change', () => {
    let images = document.querySelectorAll('.item-image');
    let activeVal = colorInput.value;

    images.forEach(image => {
        let att = image.getAttribute('data-attribute');
        
        if(att === activeVal){
            image.classList.toggle('active');
        }else{
            image.classList.toggle('active');
        }

    });
})
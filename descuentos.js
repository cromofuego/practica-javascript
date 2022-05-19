
// Cupon

const coupons = [
    {
        nombre: "JuanDC_es_Batman",
        descuento: 15,
    },
    {
        nombre: "pero_no_le_digas_a_nadie",
        descuento: 30,
    },
    {
        nombre: "es_un_secreto",
        descuento: 25,
    },
];




const isCouponValueValid = function (coupon) {    
    const inputCoupon = document.getElementById("inputCoupons");
    const valueCoupon = inputCoupon.value;   
        return coupon.nombre === valueCoupon ;
    };



function buttonPriceDiscountCoupon () {
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        console.log(userCoupon);
        const inputCoupon = document.getElementById("inputCoupons");
        const valueCoupon = inputCoupon.value;
        console.log(valueCoupon);
        console.log(userCoupon)
        const resultCupon = document.getElementById("resultCupon");
        resultCupon.innerText = "El cupón " + valueCoupon + " no es válido";
    } else {
        const inputPrice = document.getElementById("inputPrice");
        const priceValue = inputPrice.value;
        const priceValueNumber = parseInt(priceValue);

        const userDescuento = userCoupon.descuento; // estoy retomando el re sultado de userCoupon y como ya localizo con find, tomo solo el descuento de ese resultado 
        console.log(userDescuento);
        const precioDescuentoCupon = calcularPrecioConDescuento(priceValueNumber,userDescuento);

        const resultCupon = document.getElementById("resultCupon");
        resultCupon.innerText = "El descuento del cupon es de un "
        + userDescuento 
        + " %. " 
        + " Y tu producto queda en : $"+ precioDescuentoCupon;
    }; 
};


// Descuento

function calcularPrecioConDescuento(precio,descuento) {
    const porcertajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcertajePrecioConDescuento) / 100;  
    
    return precioConDescuento;
};

function buttonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const priceValueNumber = parseInt(priceValue);
    
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const discountValueNumber = parseInt(discountValue);

    const precioConDescuento = calcularPrecioConDescuento(priceValueNumber,discountValueNumber);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento;


};







// const books = ["12312" , "1231235" , "123123"];
// function booksExists(id) {
//     if(books.includes(id) === "12312"){        
//         return true;
//         };
// };

// console.log(booksExists("12312"))



// const validacionCoupons = (cupon) => {
//     if(coupons.includes(cupon)){
//         return true
//     }
// };
// validacionCoupons("mascota121");





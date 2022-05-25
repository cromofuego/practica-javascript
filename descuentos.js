
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
    {
        nombre: "cupon01",
        descuento: 15,
    },
    {
        nombre: "cuponsecreto",
        descuento: 25,
    },
    {
        nombre: "karol",
        descuento: 35,
    },
];




const isCouponValueValid = function (coupon) {    
    const inputCoupon = document.getElementById("inputCoupons");
    const valueCoupon = inputCoupon.value;   
        return coupon.nombre === valueCoupon ;
    };



function buttonPriceDiscountCoupon () {
    const userCoupon = coupons.find(isCouponValueValid); 

    const inputCoupon = document.getElementById("inputCoupons");
    const valueCoupon = inputCoupon.value;  

    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const priceValueNumber = parseInt(priceValue);
    
    if (!priceValueNumber) { 
        resultCoupon.innerText = `Por favor ingresar el precio del producto tambien`;
    }
    else if (!valueCoupon) {
        resultCoupon.innerText = `Por favor ingresa tu cupon`;
    }
    else if (!userCoupon) {
        resultCoupon.innerText = "El cupón " + valueCoupon + " no es válido";
    } else {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const priceValueNumber = parseInt(priceValue);

    const userDescuento = userCoupon.descuento; // estoy retomando el re sultado de userCoupon y como ya localizo con find, tomo solo el descuento de ese resultado 
    console.log(userDescuento);
    const precioDescuentoCupon = calcularPrecioConDescuento(priceValueNumber,userDescuento);


      //  const resultCupon = document.getElementById("resultCupon");
        resultCoupon.innerText = "El descuento del cupon es de un "
        + userDescuento 
        + " %. \n" 
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
    if ((!priceValueNumber) || (!discountValueNumber) ) {
        resultP.innerText = `Por favor ingresar los números necesarios`;
    } else {
        const resultP = document.getElementById("resultP");
        resultP.innerText = "El precio con descuento es $" + precioConDescuento;
    }
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





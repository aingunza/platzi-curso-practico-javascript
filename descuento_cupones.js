const coupons = [
  "JuanDC_es_Batman",
  "pero_no_le_digas_a_nadie",
  "es_un_secreto",
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}
var descuento;

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

 

  switch (couponValue) {
    case coupons[0]: // "JuanDC_es_Batman"
      descuento = 15;
      break;
    case coupons[1]: // "pero_no_le_digas_a_nadie"
      descuento = 30;
      break;
    case coupons[2]: // "es_un_secreto"
      descuento = 25;
      break;
  }

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

 
  brutoP.innerText = "Precio final: $" + precioConDescuento;
  descuentoP.innerText = "Descuento: "+descuento+"%";
}

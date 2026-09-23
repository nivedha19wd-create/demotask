let customerName: string = "nivedha";
let customerId: number = 1234;
let membershipType: string = "Gold";
let product = {productName: "dress",productCategory: "fashion",productPrice: 4000,quantityPurchased: 1,
stockAvailable: 5
};
let subtotal = 0;
let membershipDiscount = 0;
let couponDiscount = 0;
let gstAmount = 0;
let deliveryCharge = 0;
let finalBill = 0;
let enteredCoupon: string = "CASHBACK10";
let validCoupon: string = "CASHBACK10";
let couponDiscountRate = 10;
let orderStatus: string;


if (product.stockAvailable > 0) {
orderStatus = "in stock";
subtotal = product.productPrice * product.quantityPurchased;
if (membershipType === "Platinum") {
membershipDiscount = subtotal * 20 / 100;
}
else if (membershipType === "Gold") {
membershipDiscount = subtotal * 15 / 100;
}
else if (membershipType === "Silver") {
membershipDiscount = subtotal * 10 / 100;
}
else {
membershipDiscount = 0;
}
let discount : number;
switch (membershipType) 
{
case "Platinum":
discount = 20;
break;
case "Gold":
discount = 15;
break;
case "Silver":
discount = 10;
break;
default:
discount = 0;
}
if (product.stockAvailable > 0) {
if (enteredCoupon === validCoupon) {
couponDiscount = subtotal * couponDiscountRate / 100;
}
else {
couponDiscount = 0;
}}
let billamount = subtotal - membershipDiscount - couponDiscount;
gstAmount = billamount * 18 / 100;
finalBill = billamount + gstAmount;
deliveryCharge = finalBill >= 2000 ? 0 : 100;
finalBill += deliveryCharge;
product.stockAvailable -= product.quantityPurchased;
}
else {
orderStatus = "Out of Stock";
}
let invoice = `INVOICE
CUSTOMER DETAILS
Customer Name       : ${customerName}
Customer ID         : ${customerId}
Membership Type     : ${membershipType}
PRODUCT DETAILS
Product Name        : ${product.productName}
Category            : ${product.productCategory}
Price               : ₹${product.productPrice}
Quantity            : ${product.quantityPurchased}
Stock Available     : ${product.stockAvailable}
BILL DETAILS
Subtotal            : ₹${subtotal}
Membership Discount : ₹${membershipDiscount}
Coupon Discount     : ₹${couponDiscount}
GST (18%)           : ₹${gstAmount}
Delivery Charge     : ₹${deliveryCharge}
Final bill amount       : ₹${finalBill}
Coupon Applied      : ${couponDiscount }
Delivery Status     : ${deliveryCharge}
Order Status        : ${orderStatus}
              THANK YOU FOR SHOPPING!

`;

console.log(invoice);

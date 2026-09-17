
interface Customer {
    customerName: string;
    customerId: string;
    membershipType: MembershipType;}
interface Product {productName: string;
    productCategory: string;
    productPrice: number;
    quantityPurchased: number;
    productStock: number;}
const customer: Customer = {
    customerName: "nivedha",
    customerId: "12345",
    membershipType: "Gold"
};
type MembershipType = "Silver" | "Gold" | "Platinum" | "Regular";
const products: Product[] = [
    {
        productName: "dress1",
        productCategory: "fashion",
        productPrice: 3000,
        quantityPurchased: 1,
        productStock: 3
    },
    {
        productName: "dress2",
        productCategory: "fashion",
        productPrice: 1500,
        quantityPurchased: 2,
        productStock: 5
    }
];
const enteredCoupon: string = "cashback100";
const validCoupon: string = "cashback100";
const couponDiscountRate: number = 0.100;
const gstRate: number = 0.18;
const DeliveryCharge: number = 100;
let membershipDiscountRate: number;
switch (customer.membershipType) {
    case "Platinum":
        membershipDiscountRate = 0.15;
        break;

    case "Gold":
        membershipDiscountRate = 0.10;
        break;

    case "Silver":
        membershipDiscountRate = 0.5;
        break;

    case "Regular":
        membershipDiscountRate = 0;
        break;

    default:
        membershipDiscountRate = 0;
}
let subtotal: number = 0;
let orderStatus: string = "in progress";
for (const product of products) 
    {
if (product.productStock > 0)
     {
 if (product.quantityPurchased <= product.productStock) 
    {
            subtotal = product.productPrice * product.quantityPurchased;
        } else 
            {
        orderStatus = `In stock for ${product.productName}`;
        }

    } else 
        {
        orderStatus = `Out of Stock: ${product.productName}`;
    }
}


const membershipDiscount: number =subtotal *membershipDiscountRate;
let couponDiscount: number = 0;
let couponStatus: string;
if (enteredCoupon === validCoupon) 
    {
    couponDiscount = (subtotal - membershipDiscount) *couponDiscountRate;
    couponStatus = "Coupon Applied";
} else {
    couponDiscount = 0;
    couponStatus = "Invalid Coupon ";
}
let discountedAmount: number =
    subtotal - membershipDiscount- couponDiscount;
const gstAmount: number =
    discountedAmount * gstRate;
let finalBillAmount: number =
    discountedAmount + gstAmount;
const deliveryCharge: number =
    finalBillAmount >= 2000? 0:DeliveryCharge;

const deliveryStatus: string =
    finalBillAmount >= 2000? "Free Delivery": "100";
finalBillAmount + deliveryCharge;
const customerIdValue: string =
    customer.customerId as string;

let productDetails = "";

for (const product of products) {
    productDetails += `
Product Name     : ${product.productName}
Category         : ${product.productCategory}
Price            : ₹${product.productPrice.toFixed(2)}
Quantity         : ${product.quantityPurchased}
Stock Available  : ${product.productStock}`;
}

const invoice = `
CUSTOMER DETAILS:
Customer Name     : ${customer.customerName}
Customer ID     : ${customerIdValue}
Membership Type  : ${customer.membershipType}
PRODUCT DETAILS ${productDetails}
BILL DETAILS
Subtotal                    : ₹${subtotal}
Membership Discount      : ₹${membershipDiscount}
Coupon Discount             : ₹${couponDiscount}
Coupon Status            : ${couponStatus}
GST (${gstRate }%)              : ₹${gstAmount}
Delivery Charge            : ₹${deliveryCharge}
FINAL AMOUNT    : ₹${finalBillAmount}
ORDER STATUS            : ${orderStatus}
`;

console.log(invoice);

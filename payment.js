
let cost = 34000000;
let model = "BMW Q8";

document.getElementById("payment-header-description").innerText = model;
document.getElementById("price3").innerText = "₹"+cost;
function calculateFinalCost(cost) {
    // Define tax rates
    const salesTaxRate = 0.07; // 7% sales tax
    const luxuryTaxRate = 0.10; // 10% luxury tax
    const importDutyRate = 0.15; // 15% import duty, if applicable
    const platinumDiscount = 0.05; // 5% platinum discount

    // Calculate individual taxes
    const salesTax = cost * salesTaxRate;
    const luxuryTax = cost * luxuryTaxRate;
    const importDuty = cost * importDutyRate;

    // Calculate total taxes
    const totalTaxes = salesTax + luxuryTax + importDuty;

    // Calculate the discount
    const discount = cost * platinumDiscount;

    // Calculate the final cost
    const finalCost = (cost + totalTaxes) - discount;

    document.getElementById("st").innerText = "+  "+"₹"+salesTax;
    document.getElementById("lt").innerText = "+  "+"₹"+luxuryTax;
    document.getElementById("it").innerText = "+  "+"₹"+importDuty;
    document.getElementById("dis").innerText = "-  "+"₹"+discount;

    return finalCost;
}



let finalCost = calculateFinalCost(cost);

document.getElementById("payment-summary-price").innerText = "₹" + finalCost.toFixed(2);

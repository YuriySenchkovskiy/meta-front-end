// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (dish of dishData) {
        var currentPrice = dish.price;
        var finalPrice;

        if (typeof(taxBoolean) === "boolean" && taxBoolean) {
            finalPrice = tax * currentPrice;
        } else if (typeof(taxBoolean) === "boolean" && !taxBoolean) {
            finalPrice = currentPrice;
        } else {
            console.log(`You need to pass a boolean to the getPrices call!`);
            return;
        }

        console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    if(typeof(guests) == "number" && guests > 0 && guests < 30) {
        var discount = 0

        if(guests < 5) {
            discount = 5;
        } else if(guests >=5) {
            discount = 10;
        }

        console.log(`Discount is: $${discount}`);
    } else {
        console.log(`The second argument must be a number between 0 and 30`);
    }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);
console.log("------ Good tests ------")
getDiscount();
getDiscount(1, "ten");
getDiscount(1, 100);
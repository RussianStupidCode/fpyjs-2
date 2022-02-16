
let goods = [
    {
        id: 1,
        name: "sneakers",
        description: "text",
        sizes: [38, 39, 40],
        price: 2000,
        available: true,
    },
    {
        id: 33,
        name: "shoes",
        description: "text",
        sizes: [35, 36, 37, 38, 40],
        price: 3000,
        available: false,
    },
    {
        id: 56,
        name: "slippers",
        description: "text",
        sizes: [38, 39, 42],
        price: 500,
        available: true,
    },
    {
        id: 127,
        name: "boots",
        description: "text",
        sizes: [37, 39, 40],
        price: 4000,
        available: true,
    },
    {
        id: 876,
        name: "high boots",
        description: "text",
        sizes: [36, 39],
        price: 4500,
        available: false,
    },

];

let shoppingСart = [
    
];


shoppingСart.addGood = function(goodIndex, amount) {
    this.push({
        good: goodIndex,
        amount,
    })
}

shoppingСart.removeGood = function(goodIndex, amount) {
    for(let i = 0; i < this.length; ++i) {
        if (this[i].good == goodIndex) {
            if (amount >= this[i].amount) {
                this.splice(i, 1);
                return;
            } 

            this[i].amount -= amount;
        }    
    }
}

shoppingСart.clear = function() {
    this.splice(0, this.length);
}

shoppingСart.getTotalGoods = function(goods) {
    result = {
        totalAmount: 0,
        totalSumm: 0,
    }

    for(let el of this) {
        result.totalAmount += el.amount;
        result.totalSumm += goods[el.good].price;
    }

    return result;
}


function main(shoppingСart, goods) {
    shoppingСart.addGood(0, 10);
    shoppingСart.removeGood(0, 5);
    shoppingСart.addGood(1, 1);
    shoppingСart.addGood(2, 7);
    shoppingСart.addGood(3, 1);
    shoppingСart.removeGood(3, 1);

    console.log(shoppingСart)
    console.log(shoppingСart.getTotalGoods(goods));
    shoppingСart.clear();
    console.log(shoppingСart.getTotalGoods(goods));
}


main(shoppingСart, goods);
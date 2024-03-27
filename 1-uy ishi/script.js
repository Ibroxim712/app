function cart() {
    const priceList = {
        1: {
            'Lavash': {
                info: 'big cheese',
                price: 20000
            },
            'Hot-dog': {
                info: 'two sausages',
                price: 16000
            },
            'Sprite': {
                info: '1 L',
                price: 8000
            },
        },
        2: {
            'Gamburger': {
                info: 'big cheese',
                price: 22000
            },
            'Hot-dog': {
                info: 'one sausage',
                price: 13000
            },
            'Cola': {
                info: '1 L',
                price: 8000
            },
        },
    }

    let sum1 = 0; 
    let sum2 = 0; 

    for (const menu in priceList) {
        const menuProducts = priceList[menu];
        for (const set in menuProducts) {
            var buyurtma = set + ' ' + menuProducts[set].info;
            if (menu === '1') {
                console.log("1 chi obyektga tegishli: " + buyurtma);
                sum1 += menuProducts[set].price;
            } else if (menu === '2') {
                console.log("2 chi obyektga tegishli: " + buyurtma);
                sum2 += menuProducts[set].price;
            }
        }
    }

    console.log("1-set narxi: ", sum1);
    console.log("2-set narxi:", sum2);
}

cart();
// total sam

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let money = {
        5: 0,
        10: 0,
        20: 0
    };

    // gredy, get change from bills that we have
    const getChange = (change) => {
        const newMoney = {...money};

        for (const bill of [20, 10, 5]) {
            while (newMoney[bill] && change >= bill) {
                change -= bill;
                newMoney[bill] -= 1;
            }
        }

        if (change === 0) money = newMoney;

        return change === 0;
    }

    for (const bill of bills) {
        const change = bill - 5;
        if (!getChange(change)) return false;
        money[bill] += 1;
    }

  return true;  
};
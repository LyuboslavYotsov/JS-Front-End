function cooking(number, ...operations) {
    
    const operationArray = operations;

    operationArray.forEach(operation => {
        switch(operation)
        {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= number * 0.2;
                break;
        }

        console.log(number);
    });
}

cooking('9', 'dice', 'spice', 'chop', 'bake',
'fillet');
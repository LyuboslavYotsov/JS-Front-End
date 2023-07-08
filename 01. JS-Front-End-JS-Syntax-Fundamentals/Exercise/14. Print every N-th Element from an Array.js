function printNthElementFromArray(array, step) {

    const resultArray = [];
    for (let i = 0; i < array.length; i += step) {
        
        resultArray.push(array[i]);
        
    }

    return resultArray;
    
}

printNthElementFromArray(['1',
'2',
'3',
'4',
'5'],
6
);
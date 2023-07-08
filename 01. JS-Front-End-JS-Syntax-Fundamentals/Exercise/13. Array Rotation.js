function arrayRotation(array, rotationsCount) {

    for (let i = 0; i < rotationsCount; i++) {
        
        let currentElement = array.shift();
        array.push(currentElement);
    }

    console.log(array.join(" "));
    
}

arrayRotation([51, 47, 32, 61, 21], 2 );
arrayRotation([32, 21, 61, 1], 4 );
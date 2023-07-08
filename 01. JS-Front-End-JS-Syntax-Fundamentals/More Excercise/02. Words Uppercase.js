function changeWordsToUpperCase(input) {

    const regEx = /[\w]+/gm;
    const words = input.toUpperCase().match(regEx);
    
    console.log(words.join(", "))
}

changeWordsToUpperCase('Hi, how are you?');
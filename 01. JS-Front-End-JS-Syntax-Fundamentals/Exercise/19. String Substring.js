function findWord(targetWord, text) {
    let words = text.split(" ");
    let isFound = false;
    for (const word of words) {
        
        if (word.toLowerCase() === targetWord.toLowerCase()) {
            isFound = true;
            break;
        }
        
    }

    if (isFound) {
        console.log(targetWord);
    }
    else{
        console.log(`${targetWord} not found!`)
    }
}

findWord("JavaScrIpt", "JavaScript is the best programming language");

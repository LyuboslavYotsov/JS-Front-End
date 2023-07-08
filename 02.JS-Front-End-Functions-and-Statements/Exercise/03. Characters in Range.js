function printCharsInRange(ch1, ch2) {
  
    function getCharsInRange(ch1, ch2) {
            const firstCharNum = ch1.charCodeAt(0);
            const secondCharNum = ch2.charCodeAt(0);
          
            const start = Math.min(firstCharNum, secondCharNum);
            const end = Math.max(firstCharNum, secondCharNum);
          
            const valuesArray = [];
          
            for (let i = start + 1; i < end; i++) {
              const char = String.fromCharCode(i);
          
              valuesArray.push(char);
            }
          
            return valuesArray;
          
    }

  console.log(getCharsInRange(ch1, ch2).join(" "));
}

printCharsInRange("a", "d");
printCharsInRange("#", ":");
printCharsInRange("C", "#");

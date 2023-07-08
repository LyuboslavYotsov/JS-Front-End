function printDNA(dnaLength) {
  let dnaSequence = [
    ["A", "T"],
    ["C", "G"],
    ["T", "T"],
    ["A", "G"],
    ["G", "G"],
  ];

  for (let i = 0; i < dnaLength; i++) {
    [a, b] = dnaSequence[i % 5]
    
    if (i % 4 === 0) {
        console.log(`**${a}${b}**`)
    } else if (i % 2 === 1){
        console.log(`*${a}--${b}*`)
    } else if (i % 2 === 0) {
        console.log(`${a}----${b}`)
    }
  }
}

printDNA(10);

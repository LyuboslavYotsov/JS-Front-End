function factorielDivisionesults(num1, num2) {
  function factoriel(number) {
    if (number <= 1) {
      return 1;
    }

    return factoriel(number - 1) * number;
  }

    let firstFactoriel = factoriel(num1);
    let secondFactoriel = factoriel(num2);

    console.log((firstFactoriel / secondFactoriel).toFixed(2))
}

factorielDivisionesults(6, 2);

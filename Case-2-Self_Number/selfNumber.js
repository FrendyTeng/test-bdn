const split = (number) => {
    const digits = number.toString().split('');
  
    return digits.map(Number);
  };
  

  const sum = (numbers) => {
    return numbers.reduce((previous, current) => {
      return previous + current;
    });
  };
  

  const generateSelfNumber = (max) => {
    let numbers = [],
      excludes = [];
  
    for (let n = 1; n <= max; n++) {
      let sumSplit = sum(split(n));
      let sumTotal = n + sumSplit;
  
      excludes.push(sumTotal);
  
      if (excludes.indexOf(n) === -1) {
        numbers.push(n);
      }
    }
  
    return numbers;
  };
  
console.log(sum(generateSelfNumber(10000)).toString());
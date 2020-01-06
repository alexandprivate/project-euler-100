function isMultiple(num) {
  return (num % 3 === 0 || num % 5 === 0) ? true : false
}

function multiplesOf3and5(number) {
  let multiples = 0;
  for (let i = 0; i < number; ++i) {
    if (isMultiple(i)) multiples = multiples + i
  } return multiples
}

multiplesOf3and5(1000)

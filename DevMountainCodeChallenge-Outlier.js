const findOutlier = (integers) => {
  let evensArr = [];
  let oddsArr = [];

  for (let i = 0; i < integers.length; i++) {
    let num = integers[i];

    if (num % 2 === 0) {
      evensArr.push(num);
    } else {
      oddsArr.push(num);
    }
  }
  if (evensArr.length === 1) {
    return evensArr[0];
  } else {
    return oddsArr[0];
  }
};

const getPrimeFactoooors = n => {
    let a = [],
      f = 2;
    while (n > 1) {
      if (n % f === 0) {
        a.push(f);
        n /= f;
      } else {
        f++;
      }
    }
    return a;
};
 
module.exports = getPrimeFactoooors;
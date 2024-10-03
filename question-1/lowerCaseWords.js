function lowerCaseWords(mixedArray=[]) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject('Input type is not an array');
      } else {
        const strings = mixedArray.filter(value => typeof value === 'string');
        const outputArray = strings.map(value => value.toLowerCase());
        resolve(outputArray);
      }
    });
  }
  

  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  lowerCaseWords(mixedArray)
    .then(outputArray => console.log(outputArray)) 
    .catch(error => console.error(error));
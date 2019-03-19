// You have an array of characters (string) that may be '1', '0' o '*'. e.g. 10*00*0.
// The program needs to generate an output of all the possible combinations by replacing  with an 0 and 1.
// I.e. input> 10**0 output> 10000, 10010, 10100, 10110. Input > 0 output > 00, 10.

  function combinations(str) {
    const arr = str.split('*');

    return arr
      .map((item, i) => {
        if (!item && i < arr.length - 1) {
          return ['0', '1'];
        }

        if (str.endsWith(item)) {
          return [item];
        }
        else return [item + '0', item + '1'];
      })
      .reduce((acc, elAsArr) => {
        const firstStep = acc.map((accElAsArr) => elAsArr.map((el) => accElAsArr.concat(el)));
        const secondStep = firstStep.reduce((prev, curr) => [...prev, ...curr], []);
        return secondStep;
      }, [[]])
      .map((el) => el.join(''))
      .join(', ');
}

combinations('10**0'); // => "10000, 10010, 10100, 10110"

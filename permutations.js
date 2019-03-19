// You have an array of lists e.g.; [[1,3], ['a'], [4,5]].
// We would like to obtain all the permutations between the lists.
// The answer for this example is: (1,a,4) (1,a,5) (3,a,4) (3,a,5).
// Code a program that does this for any quantity of lists and elements on them.

function permutations(arr) {
  if (Array.isArray(arr)) {
    if(arr.length < 2) return arr;
    const arrayOfArrays = arr.reduce((acc, elAsArr) => {
      const firstStep = acc.map((accElAsArr) => elAsArr.map((el) => accElAsArr.concat(el)));
      const secondStep = firstStep.reduce((prev, curr) => [...prev, ...curr], []);
      return secondStep;
    }, [[]]);

    const arrayOfResp = arrayOfArrays.map((el) => {
      const arrAsStr = el.join(',');
      return arrAsStr
        .padStart(arrAsStr.length + 1, '(')
        .padEnd(arrAsStr.length + 2, ')')
    });

    const resp = arrayOfResp.join('');

    return resp;
  }

  return 'This function expect an array.';
}

permutations([[1, 3], ['a'], [4, 5]]); // => "(1,a,4)(1,a,5)(3,a,4)(3,a,5)"

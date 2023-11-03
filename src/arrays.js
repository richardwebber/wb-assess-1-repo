// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  
  const bigNums = [];

  for (let i of numbers) {
    if (i > 10) {
      bigNums.push(i);
    }
  }
  return bigNums;
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  
  const wordsThatStartWithB = []

  for (let i of words) {
    if (i[0] === 'B' || i[0] === 'b') {
      wordsThatStartWithB.push(i);
    }
  }
  return wordsThatStartWithB;
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  return originalArray.concat(additionalItems);
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  
  const sameLengthItems = [];

  for (let i of items) {
    if (i.length === length) {
      sameLengthItems.push(i)
    }
  }
  return sameLengthItems;
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  
  const everOtherElement = [];

  for (let i = 0; i <= items.length; i += 2) {
    everOtherElement.push(items[i]);
  }
  return everOtherElement;
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  
  const matchingFirstLetter = [];

  for (let i of words) {
    if (i[0] === letter) {
      matchingFirstLetter.push(words.indexOf(i))
    }
  }
  return matchingFirstLetter;
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  
  let smallItemArr = [];
  items.sort((a, b) => a - b);
  smallItemArr = items;
  smallItemArr.splice(n - items.length)
  return smallItemArr.reverse();

}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2


function findIndex(items, value) {
	if (items.includes(value)) {
  return items.indexOf(value);
 } else {
 return undefined;
 }
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  
  let rangeOfNum = [];
  
  for (let i = start; i <= stop; i++) {
		rangeOfNum.push(i);
	}
  return rangeOfNum;
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};

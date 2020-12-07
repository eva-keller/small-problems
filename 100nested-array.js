//Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.
let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];

  function nest(arr) {
    for ( let i = 0; i <= arr.length; i++){
        for (let j = 0; j <= arr.length; j++){
            console.log(arr[i][j]);
        }
    }
}

nest(vocabulary);
/*
for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
    let synonyms = vocabulary[vocabularyIdx];
  
    for (let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
      console.log(synonyms[synonymIdx]);
    }
  }
*/
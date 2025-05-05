


function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  
  function countCharacters(str) {
    return str.length;
  }
  
  
  function capitalizeWords(sentence) {
    var words = sentence.split(" ");
    var result = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
      result.push(capitalized);
    }
  
    return result.join(" ");
  }
  
  
  
  
  function findMax(arr) {
    return Math.max.apply(null, arr);
  }
  

  function findMin(arr) {
    return Math.min.apply(null, arr);
  }
  
  
  function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  
  function filterArray(arr) {
    var filtered = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        filtered.push(arr[i]);
      }
    }
    return filtered;
  }
  
  
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
  
    var result = 1;
    for (var i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
  
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  
  function fibonacci(n) {
    var seq = [0, 1];
  
    for (var i = 2; i < n; i++) {
      seq.push(seq[i - 1] + seq[i - 2]);
    }
  
    return seq.slice(0, n);
  }
  

  

  console.log("Max:", findMax([3, 7, 1, 9]));
  console.log("Min:", findMin([3, 7, 1, 9]));
  console.log("Sum:", sumArray([1, 2, 3, 4]));

  
  
  
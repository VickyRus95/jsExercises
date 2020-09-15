function largestSwap(num) {
numeroFinal = parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) 
return numeroFinal <= num
} 
console.log(largestSwap(14))

console.log(largestSwap(53))

console.log(largestSwap(99))
function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        return outerVar + innerVar;
    }
}

const closureFunc = outerFunction(10);  // outerVar is set to 10
console.log(closureFunc);  // Outputs: 15



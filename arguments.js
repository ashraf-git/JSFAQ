function addNumbers(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    logInfo('Good Morning');
    function logInfo(message){
        console.log(message);
    }
    var double = sum * 2;

    return double;
}
var result = addNumbers(3, 5, 4, 6);
console.log(result);
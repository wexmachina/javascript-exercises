const fibonacci = function(input) {
    let num = parseInt(input);
    if (num<1) {
        return "OOPS";
    }
    let a=0, b=1, c=num;

    for (let i=2; i<=num; i++) {
        c=a+b;
        a=b;
        b=c;
    }
    return c
};

// Do not edit below this line
module.exports = fibonacci;

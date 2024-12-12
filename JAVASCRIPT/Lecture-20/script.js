{
    // JavaScript call()

    // Without use call method

    function sum(a, b) {
        return a + b;
    }

    // console.log(sum(2, 10));
}

{
    // With call method

    function sum(a, b) {
        return a + b;
    }
    let result = sum.call(this, 5, 15);
    console.log(result);
}

{
    let student = {
        stud_name: "Mohan",
        age: 50
    };

    function showStudent() {
        console.log(`Student Name ${this.stud_name} and age is ${this.age}`);
    }

    showStudent.call(student);
}

{
    // Function.prototype.apply()

    function largestNumber(a, b, c) {
        if ((a > b) && (a > c)) {
            console.log(`${a} is largest`);
        } else if ((b > a) && (b > c)) {
            console.log(`${b} is largest`);
        } else if ((c > a) && (c > b)) {
            console.log(`${c} is largest`);
        }
    }

    largestNumber(2, 54, 578);
    largestNumber.apply(this, [32, 54, 1]);
}


{
    // JavaScript Generator Function

    function* generatorFunction() {
        yield 1;
        yield "Hello World";
        yield 3 * 5;
    }

    let gen = generatorFunction();

    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
}

{
    // JavaScript Callback Function

    function sum(a, b) {
        return console.log(a + b);
    }

    function multi(a, b, callback) {
        callback();
        // return console.log(a + b);
    }

    multi(5, 25, sum);
}

{
    // Asynchronous JavaScript

    let timeoutID = setTimeout(() => console.log("This is setTimeout"), 5000);
    let intervalID = setInterval(() => console.log("This is setInterval()"), 2000);

    clearTimeout(intervalID);
    
    console.log(timeoutID);
    console.log(intervalID);
}

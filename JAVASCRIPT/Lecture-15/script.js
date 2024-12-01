/* Javascript Array Object Methods */

/* Array.at Method */

// at(index)

{
    let newArray = [1 , 2 , 3 , 4 , 5 , 6]

    console.log(newArray.at(-1));
}

/* Array.concat Method */

// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)


{
    // let array1 = ['html' , 'css' , 'bootstrap']

    // let array2 = ['toys' , 'television' , 'bicycle' , 'Riksha']

    // let array3 = [11 , 22 , 33]

    // let array4 = array2.concat(array1 , array3)

    // console.log(array4);
}

/* Array.copyWithin Method */

// copyWithin(target, start)
// copyWithin(target, start, end)


{
    // let array1 = ['🍏' , '🍉' , '🍒' , '🍓' , '🥑' , '🥦' , '🍇' , '🥭']

    // console.log(array1);

    // let array2 = array1.copyWithin(4)

    // console.log(array1);

    // let array2 = array1.copyWithin(2 , 5)

    // console.log(array2);

    // let array2 =  array1.copyWithin(2 , 4 , 7)

    // console.log(array2);


    // let array2 = array1.copyWithin(-8)

    // console.log(array1);
    
}

// Array.prototype.entries()

// entries()


{
    let array = [1, 2 , 3 , 4 , 5]

    let array2 = array.entries()

    console.log(array2.next().value);
    console.log(array2.next().value);
    console.log(array2.next().value);
    console.log(array2.next().value);
    console.log(array2.next().value);
    console.log(array2.next().value);
    
}

// Array.prototype.every()

// every(callbackFn)
// every(callbackFn, thisArg)

{
    let num = [45 , 25 , 78 , 95 , 43 , 5]

    let array = num.every((item) => item > 4)

    console.log(array);
}

let fillArray = [2, 4, 6, 8, 10];
    console.log(fillArray);
    // console.log(fillArray.fill(100));
    // console.log(fillArray.fill(100, 2));
    console.log(fillArray.fill(100, 2, 4));


{
    // Array.find()
    // find(callbackFn)
    // find(callbackFn, thisArg)

    let findArray = [2, 3, 4, 5, 6, 7, 8];
    console.log(findArray.find((item) => item == 2));
}

{
    // Array.findIndex()

    let findIndexArray = [4, 9, 16, 25, 36];
    console.log(findIndexArray.findIndex((item) => item < 1));
}

{
    // Array.findLast()

    let findLast =  [5, 12, 50, 130, 44];
    console.log(findLast.findLast((item) => item > 45));
}

{
    // Array.findLastIndex()

    let findLastIndex =  [5, 12, 50, 130, 44];
    console.log(findLastIndex.findLastIndex((item) => item > 45));
}

{
    // Array.includes()

    let includesArray = ["dog", "cat", "camel", "elephant", "dog", "cow"];
    console.log(includesArray);
    console.log(includesArray.includes("elephant"));
    console.log(includesArray.includes("dog", 5));
}

{
    // Array.indexOf()

    let indexOfArray = ["dog", "cat", "camel", "elephant", "dog", "cow"];
    console.log(indexOfArray.indexOf("elephant"));
    console.log(indexOfArray.indexOf("lion"));
    console.log(indexOfArray.indexOf("dog", 1));
}

{
    // Array.join()

    let joinArr = ["HTML", "CSS", "JavaScript"];
    console.log(joinArr);
    console.log(joinArr.join());
    console.log(joinArr.join('-'));
    console.log(joinArr.join(' '));
}

{
    // Array.keys()

    let keysArray = [5, 10, 15, 20, 25];
    
    for (let keys of keysArray.keys()) {
        console.log(keys);
    }
}

{
    // Array.lastIndexOf()

    let lastIndexOfArray = ["dog", "cat", "camel", "elephant", "dog", "cow"];
    console.log(lastIndexOfArray.lastIndexOf("lion"))
}

{
    // Array.reverse()

    let reverseArray = ["one", "two", "three"];
    console.log(reverseArray);
    console.log(reverseArray.reverse());
}

{
    // Array.values()

    let valuesArr = ["a", "b", "c", "d"];
    for (let value of valuesArr.values()) {
        console.log(value);
    }
}

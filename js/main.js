for(let i = 1; i < 101; i++) {


    // i = Fizzbuzz
    if (i% 15 == 0){
        console.log("Fizzbuzz");
    }


    // i = Fizz
    else if (i% 3 == 0){
        console.log("Fizz")
    }


    // i = Buzz
    else if (i% 5 == 0){
        console.log("Buzz")
    }


    else {
        console.log(i)
    }
}


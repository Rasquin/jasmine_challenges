fizzBuzz = function(number) {
    if (Number.isInteger(number / 3) && Number.isInteger(number / 5)) {
        return "FizzBuzz"
    }

    else if (Number.isInteger(number / 3)) {
        return "Fizz";
    }
    else if (Number.isInteger(number / 5)) {
        return "Buzz";

    }
    else {
        return number;
    }
}

/* Solution of school

fizzBuzz = function(number) {
	if (number % 3 === 0 && number % 5 === 0) {
		return "FizzBuzz";
	}
	else if (number % 3 === 0) {
		return "Fizz";
	}
	else if (number % 5 === 0) {
		return "Buzz";
	}	
	else {
		return number
	}
};

*/
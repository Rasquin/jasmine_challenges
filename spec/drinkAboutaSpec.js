describe("whatCanIDrink", function() {

    it("should exist", function() {
        // Expectations are built with the function expect which takes a value, called the actual.
        // Each matcher implements a boolean comparison between the actual value and the expected value.
        // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
        expect(whatCanIDrink).toBeDefined();
    });


    it("should return Sorry. I can’t tell what drink because that age is incorrect! when called as whatCanIDrink(-8)", function() {
        var result = whatCanIDrink(-8)
        expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });


    it("should return drink toddy when called as whatCanIDrink(13)", function() {
        var result = whatCanIDrink(13)
        expect(result).toBe("Drink Toddy");
    });

    it("should return drink Coke when called as whatCanIDrink(14)", function() {
        var result = whatCanIDrink(14)
        expect(result).toBe("Drink Coke")
    });

    it("should return drink Beer when called as whatCanIDrink(19)", function() {
        var result = whatCanIDrink(19)
        expect(result).toBe("Drink Beer")
    });

    it("should return drink Whisky when called as whatCanIDrink(19)", function() {
        var result = whatCanIDrink(29)
        expect(result).toBe("Drink Whisky")
    });

    it("should return Sorry. I can’t tell what drink because that age is incorrect! when called as whatCanIDrink(150)", function() {
        var result = whatCanIDrink(150)
        expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });

});

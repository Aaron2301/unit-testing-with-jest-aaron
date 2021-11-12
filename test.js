const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js');
    
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One thousand Yen should be 6.25 Pounds", function(){

    const {fromYenToPound} = require('./app.js');

    expect(fromYenToPound(1000)).toBe(6.25);

})

test("The one dollar should be 106.58 Yenes", function(){

    const {fromDollarToYen} = require('./app.js');

    expect(fromDollarToYen(1)).toBe(106.58);
});
/*let {sum} = require('./app.js')
test('adds 14 + 9 to equal 23', function (){
    let total = sum(14,9);
    expect(total).toBe(23)
})*/
 test('fromEuroToDollar', function (){
    const {fromEuroToDollar} = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745)
 });

 test('fromDollarToYen', function (){
    const {fromDollarToYen} = require('./app.js');
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724)
 });

 test('fromYenToPound', function (){
    const {fromYenToPound} = require('./app.js');
    expect(fromYenToPound(3.5)).toBe(476.5425)
 })
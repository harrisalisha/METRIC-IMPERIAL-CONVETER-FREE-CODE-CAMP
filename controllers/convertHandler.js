/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var num = input.slice(0, input.match(/[a-z]/i).index || ' ');
    num = num.split('/');
    //console.log('num:', num)
    if (num[0] === '') {
      num = []
    }
    //console.log(num);
    switch (num.length) {
      case 0:
        return 1;
        break;
      case 1:
        return num.join();
        break;
      case 2:
        return num[0] / num [1];
        break;
      default: 
        return 'invalid number';
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var units = ['mi', 'km', 'gal', 'l', 'kg', 'lbs'];
    //console.log('input', input);
    var unit = input.slice(input.match(/[a-z]/i).index);
    unit = unit.toLowerCase()
    //console.log('unit', unit)
    if (units.indexOf(unit) != -1) {
      result = unit;
    } else {
      result = "invalid unit"
    }
    //console.log(result);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    initUnit = initUnit.toLowerCase();
    switch (initUnit) {
      case "mi":
        return "km";
        break;
      case "gal":
        return  "l";
        break;
      case "lbs":
        return "kg";
        break;
      case "km":
        return "mi";
        break;
      case "l":
        return "gal";
        break;
      case "kg":
        return "lbs";
        break;      
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
        switch (unit) {
      case "mi":
        return "miles";
        break;
      case "gal":
        return  "gallons";
        break;
      case "lbs":
        return "pounds";
        break;
      case "km":
        return "kilometers";
        break;
      case "l":
        return "liters";
        break;
      case "kg":
        return "kilograms";
        break;      
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
            initUnit = initUnit.toLowerCase();
    switch (initUnit) {
      case 'gal':
        return initNum * galToL;
        break;
      case 'l':
        return initNum / galToL;
        break;
      case 'lbs':
        return initNum * lbsToKg;
        break;
      case 'kg':
        return initNum / lbsToKg;
        break;
      case 'mi':
        return initNum * miToKm;
        break;
      case 'km':
        return initNum / miToKm;
        break;      
    } 
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initNum == 'invalid number' && initUnit.toLowerCase() == 'invalid unit') {
        result = 'invalid number and unit'; 
      }
    else if (initNum == 'invalid number') {
      result = 'invalid number'; 
    }
    else if (initUnit.toLowerCase() == 'invalid unit') {
      result = 'invalid unit'
    }
    else {
    var result = initNum + ' ' + this.spellOutUnit(initUnit) +  ' converts to ' + returnNum.toFixed(5) + ' ' + this.spellOutUnit(returnUnit) + '.';
    }
    return result;
  };
  
}

module.exports = ConvertHandler;

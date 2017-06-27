function countdown(callback){
  window.setTimeout(function() {callback();}, 2000);
}

function createMultiplier(num1, num2){
  return function(num2){
    return num1*num2
  }
}

var doubler = createMultiplier(2)

var tripler = createMultiplier(3)

function multiplier(num1, num2){
  num1 * num2
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)

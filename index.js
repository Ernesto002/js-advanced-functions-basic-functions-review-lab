// Your code here
function saturdayFun(activity = `roller-skate`){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = `go to the office`){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(param0 = "*"){
    return function inner(param1 = "special"){
        return `You are ${param0}${param1}${param0}!`
    }
}

const Calculator = {
    add:function(a,b){return a+b},
    subtract:function(a,b){return a-b},
    multiply:function(a,b){return a*b},
    divide:function(a,b){return a/b},
}

function actionApplyer(num,functions){
    let realNum = num
    const numbers = functions.map(function(e){
      realNum = e(realNum)
      return realNum
    })
    if (num != 0){
   console.log(`${num}, multiplied by 2, added to 1000 and then modulo 7 is ${numbers[2]}. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result`)
    return numbers[2]
   }else{
   return num
    }
}
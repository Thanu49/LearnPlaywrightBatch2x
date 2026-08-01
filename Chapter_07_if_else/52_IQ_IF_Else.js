// if("hello"){console.log("string is truthy")}
// if(42){console.log("number is truthy")}
// if({}){console.log("object is truthy")}
// if([]){console.log("array is truthy")}

if(""){
    console.log("string is falsy")
}

if(null){console.log("null is falsy")}
if(undefined){console.log("undefined is falsy")}
if(0){console.log("0 is falsy")}
if(false){console.log("false is falsy")}
if(NaN){console.log("NaN is falsy")}

let name=undefined
if(name){
    console.log("name is defined")
}else{
    console.log("name is not defined")
}
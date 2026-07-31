var a =10;
console.log(a);

function printhello(){
    console.log("Hello");
    var a =20;
    
    if(true){
        var a=30;
        
    }
    console.log("function",a);
}
printhello();
console.log("global",a);
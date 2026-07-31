//let is block scoped

let x="global";
if(true){

    condsole.log(x);//x = global won't print we will get reference error
    
    let x="block";
    console.log(x);
}
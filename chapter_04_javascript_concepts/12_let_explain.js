let a = 10;
let retrycount=0;
retrycount=retrycount+1;
console.log("retry attempt ",retrycount);

//let retrycount=0; not possible because redeclaration of let is not possible

let testing="pending"
if(testing==="pending"){
    let execution="done";
    console.log("testing is ",testing);
}
console.log("execution is ",execution);
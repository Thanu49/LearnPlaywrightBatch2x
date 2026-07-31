function getuserstatus(){
    console.log(status_code);
    var status_code=200;
    console.log(status_code);


}
getuserstatus();

//note :var is function scoped and it is hoisted to the top of the function. So, when we try to access the variable before its declaration, it will return undefined.

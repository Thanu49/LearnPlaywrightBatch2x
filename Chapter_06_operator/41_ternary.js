let raj_kumar=18;
let raj_will_go_goa=raj_kumar>=18?"yes":"no";
console.log(raj_will_go_goa)

let ci=true;
let brwser=ci?"headed":"headless";
console.log(brwser)

let response_time=850;
let sla=1000;

let slastatus=response_time<=sla?"within sla":"sla breached"
console.log(slastatus)

//condition?true:false

//nested tewrnary
let age=21;
let is_pramod_will_go=age>26?"yes he will go":"no he won't"
console.log(is_pramod_will_go)

let is_he_drink=age>18?(age>20?"he can drink":"no drink"):"he wont go"
console.log(is_he_drink)

let statu_code=404;
let category=statu_code<300?"success":
statu_code<400?"redirect":
statu_code<500?"client error":"server error"
console.log(category)

//which is greater num

let a=10;
let b=20;
let max=a>b?"greater":"lesser"
console.log(max)

let a=9
let b=8
let c=3

let max=a>b?((a>c)?"a is grater":"c is greater"):((b>c)?"b is grater":"c is greater")

console.log(max)



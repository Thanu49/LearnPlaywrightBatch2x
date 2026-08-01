const readline=require("readline")

const r1=readline.createInterface({
    input :process.stdin,
    output:process.stdout

})

r1.question("enter a number",(input)=>{
    let num =prompt("enter a number")
num = Number(num)

if(num%2===0){
    console.log("even")
}else{
    console.log("odd")
}
r1.close
})


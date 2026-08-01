let responsecode=404
switch(responsecode){
    case 200:
        console.log("ok")
        break
    case 404:
        console.log("page not found")
        break
    case 300:
        console.log("redirect")
        break
    default :
        console.log("something went wrong")
        break
}        
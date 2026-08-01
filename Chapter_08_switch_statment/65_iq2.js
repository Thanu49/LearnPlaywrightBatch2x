let testscore=85;
switch(true){
    case (testscore>=90):
        console.log("A grade")
        break;  

    case (testscore>=80 && testscore<90):
        console.log("B grade")
        break;  
    case (testscore>=70 && testscore<80):
        console.log("C grade")
        break;  
    case (testscore>=60 && testscore<70):
        console.log("D grade")
        break;
    default:
        console.log("fail")
        break;  
}
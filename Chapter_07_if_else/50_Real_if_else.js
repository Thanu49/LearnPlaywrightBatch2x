let is_login= true;
let userRole="editor";

if(is_login){
    if(userRole==="admin"){
        console.log("admin can do all the things")
    }else if(userRole==="editor"){
        console.log("editor can edit the content")
    }else if(userRole==="viewer"){
        console.log("viewer can read only")
    }else{
        console.log("no idea ,wht to do")
    }
}else{
    console.log("please login first")
}
try{
    let age=prompt("ENter the age")
    age=Number.parseInt(age)
    if(age>150){
        throw new ReferenceError("This is probably not true")
    }
}
catch(error){
    console.log(error.name);//name of error//konsa error aya he
    console.log(error.message);//kya error aaya he
    console.log(error.stack);//shows original error thrown by system
}

console.log("script is still running");





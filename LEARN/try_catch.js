setTimeout(()=>{
    console.log("op 1..");
},1000)


try{
    // setTImeout dont put setTimeout , then try wll be of no use always put try exactly before error threat line; timeout me wo code ruka but wahi time pe error agya to ,,, islie bola
    console.log(dhindha);//invalid thing -->error 
}                                                      //TRY AND CATCH USE TO MAINTAIN FLOW OF CODE ,NOT WANT CODE TO STOP
catch(error){
    console.log("error agya");
}


setTimeout(()=>{
    console.log("op 2..");
},2000)

setTimeout(()=>{
    console.log("op 3..");
},3000)

setTimeout(()=>{
    console.log("op 4..");
},4000)
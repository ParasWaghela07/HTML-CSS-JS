 
 let arr=[" 'Whats the best thing about Switzerland I dont know, but the flag is a big plus.' ",

 " 'I invented a new word! Plagiarism! '",
 
 " 'Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.'",
 
 
 "'Why do we tell actors to “break a leg?” Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor'",
 
 "'Helvetica and Times New Roman walk into a bar. “Get out of here!” shouts the bartender. “We don’t serve your type.'"
," 'Whats the best thing about Switzerland I dont know, but the flag is a big plus.' ",

" 'I invented a new word! Plagiarism! '",

" 'Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.'",


"'Why do we tell actors to “break a leg?” Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor'",

"'Helvetica and Times New Roman walk into a bar. “Get out of here!” shouts the bartender. “We don’t serve your type.'"]

let r=-1;
let index=-2;
 let x=function(e){
     //////////////e is event object use to carry things , basically helper or dalal, can be replaced by another letter , words.
    console.log(e);
    console.log(e.target);
    console.log(e.type,e.clientX,e.clientY); // where user have clicked , gives coordinates

    
    r=Math.floor(Math.random()*arr.length);
    while(r==index){
        r=Math.floor(Math.random()*arr.length);
    }
    index=r;
    let a=document.getElementById("Chutkula");
    a.innerHTML=arr[r];
    
 }

 let b=document.getElementById("btn");
 b.addEventListener('click',x);
 
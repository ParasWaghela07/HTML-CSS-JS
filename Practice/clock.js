
// console.log("date : " + a.getDate());
// console.log("month : " + a.getMonth());
// console.log("year : " + a.getFullYear());
// console.log("hours : " + a.getHours());
// console.log("minutes : " + a.getMinutes());
// console.log("seconds : " + a.getSeconds());

// setInterval(function(){
//     let a=new Date();
//     let b=a.getHours();
//     let c=a.getMinutes();
//     let d=a.getSeconds();
//     document.getElementById("clk").innerText= `${b}:${c}:${d}`;
// },1000)
setTimeout(function(){
    setInterval(function(){
    const now = new Date();

    const b = now.getHours();
    const c = now.getMinutes();
    const d = now.getSeconds();

    setInterval(function(){
        const now = new Date();
    
        let b = now.getHours();
        let c = now.getMinutes();
        let d = now.getSeconds();
    
        // Adding leading zeros for single-digit values
        b = b < 10 ? '0' + b : b;
        c = c < 10 ? '0' + c : c;
        d = d < 10 ? '0' + d : d;
    
        document.getElementById("clk").innerText = b + ':' + c + ':' + d;
    }, 1000);
    

    document.getElementById("clk").innerText = b +':' + c + ':' + d;
}, 1000);},1000);


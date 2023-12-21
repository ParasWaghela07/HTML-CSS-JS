//change color of 1st nav element

// let a=document.getElementById("target");
// a.style.color="red"; 

//OR

document.getElementsByTagName("ul")[0].firstElementChild.style.color="red";// all navs --> 1st nav --> 1st child


//change color of 1st and last element to green
document.getElementsByTagName("ul")[0].firstElementChild.style.color="green";
document.getElementsByTagName("ul")[0].lastElementChild.style.color="green";

//chaneg bg color of all li

Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background="gold";
});

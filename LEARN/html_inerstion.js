let a=document.getElementById("leo");
a.innerHTML=a.innerHTML + '<h1>HEllo</h1>';
//adding more tags/content in html
let b=document.createElement('div');
b.innerHTML='<h2>Heay</h2>';
a.appendChild(b); //document.body.a.appendChild(b); yebi kr skt he
//append piche dalta he 
//prepend aage dalta he

a.prepend(b);
a.before(b);
a.after(b);
a.replaceWith(a);

////////////////////////////////////////////////insert adjacent html /text/element
a.insertAdjacentHTML('beforebegin','<div class="test">beforeVegin</div>'); //element k tag kebi pehle
a.insertAdjacentHTML('beforeend','<div class="test">beforeVegin</div>');
a.insertAdjacentHTML('afterbegin','<div class="test">beforeVegin</div>');
a.insertAdjacentHTML('afterend','<div class="test">beforeVegin</div>');//closing tag kebi bahar
a.remove(); // also there // delete krdega


///////////////////////////////////////////////
//CLASS NAME & CLASS LIST






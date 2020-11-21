let person = prompt("What word do you want swapped");


const text = document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a');

for(let i=0;i<text.length;i++){
    if(text[i].innerHTML.includes(person)){
        text[i].innerHTML = text[i].innerHTML.replace(person, 'The Big Orange Sus Man');
    //}else if(text[i].innerHTML.includes(person)){
        //text[i].innerHTML = text[i].innerHTML.replace(person, 'The Big Orange Sus Man');
    }
}
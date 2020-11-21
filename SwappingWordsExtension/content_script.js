const text = document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a');

for(let i=0;i<text.length;i++){
    if(text[i].innerHTML.includes('Donald Trump')){
        text[i].innerHTML = text[i].innerHTML.replace('Donald Trump', 'The Big Orange Sus Man');
    }else if(text[i].innerHTML.includes('Trump')){
        text[i].innerHTML = text[i].innerHTML.replace('Trump', 'The Big Orange Sus Man');
    }
}
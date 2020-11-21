chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    const text = document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a');

    //not sure how to change request into swapin and swapout
    for(let i=0;i<text.length;i++){
        if(text[i].innerHTML.includes(request.swappedout)){
            text[i].innerHTML = text[i].innerHTML.replace(request.swappedout, request.swappedin);
        }
    }
  }
);
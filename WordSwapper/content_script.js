chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    //Word Swap
    const text = document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a');
    for(let i=0;i<text.length;i++){
        if(text[i].innerHTML.toLowerCase().includes(request.swappedout.toLowerCase())){
            text[i].innerHTML = text[i].innerHTML.replace(request.swappedout, request.swappedin);
        }
    }


    //Image Swap
    let image = document.createElement('img'); 
    if(request.picture){
        image.src = request.picture;
        const img = document.querySelectorAll('img');
        for(let i=0;i<img.length;i++){
            img[i].src =  image.src;
            img[i].srcset = image.src;
            console.log(img[i]);
        }
    }
});
let swapout;
let swapin;
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        swapout = request.swapout;
        swapin = request.swapin;

        if(request.swapout || request.swapin){
            sendResponse({wasPassed: "Failed:("})
        }else{
            sendResponse({wasPassed: "Values passed!"})
        }
    })




const text = document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a');

for(let i=0;i<text.length;i++){
    if(text[i].innerHTML.includes(swapout)){
        text[i].innerHTML = text[i].innerHTML.replace(swapout, swapin);
    }else if(text[i].innerHTML.includes(swapout)){
        text[i].innerHTML = text[i].innerHTML.replace(swapout, swapin);
    }
}
document.addEventListener('DOMContentLoaded',documentEvents, false);

function documentEvents(){
    document.getElementById('bttn').addEventListener('click',function () {
        myAction(document.getElementById('swappedout'),document.getElementById('swappedin'));
    });
}

function myAction(leaving,coming){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{swapout: leaving,swapin: coming}, function(response){

        })
    });
}

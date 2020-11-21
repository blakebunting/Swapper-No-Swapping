let a = document.body.innerText;
let b = WordCount(a);
let c = 0;

// send the page title as a chrome message
if(b==undefined){
    chrome.runtime.sendmessage(c);
}else{
    chrome.runtime.sendMessage(b);
}

function WordCount(str){
    return str.split(" ").length;
}
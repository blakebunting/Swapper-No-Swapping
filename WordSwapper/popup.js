//submit button
document.getElementById('bttn').addEventListener('click',function () {
    chrome.tabs.query({ active: true }, function(tabs) {
        let swapOut = document.getElementById('swappedout').value;
        let swapIn = document.getElementById('swappedin').value;
        let pic = document.getElementById('pic').value;
        chrome.tabs.sendMessage(tabs[0].id, { "swappedout": swapOut, "swappedin": swapIn , "picture" : pic});
    })
});

//clear button
window.addEventListener("load", event => {
    document.getElementById("reload").onclick = function(){
        location.reload();
    }
})

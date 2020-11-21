document.getElementById('bttn').addEventListener('click',function () {
    chrome.tabs.query({ active: true }, function(tabs) {
        let swapOut = document.getElementById('swappedout').value;
        let swapIn = document.getElementById('swappedin').value;
        chrome.tabs.sendMessage(tabs[0].id, { "swappedout": swapOut, "swappedin": swapIn });
    })
});
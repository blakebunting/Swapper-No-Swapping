//import { show } from "./content_script.js";
document.addEventListener('DOMContentLoaded',documentEvents, false);

function documentEvents(){
    document.getElementById('bttn').addEventListener('click',function () {
        let swapout = document.getElementById('swappedout').value;
        let swapin = document.getElementById('swappedin').value;
        alert(swapout, swapin);
        //show(swapout,swapin);
    });
}

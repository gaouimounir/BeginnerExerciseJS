function search(toSearch){
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
        if (all[i].innerHTML == toSearch){
            all[i].style.backgroundColor="red";
        }
    }
}

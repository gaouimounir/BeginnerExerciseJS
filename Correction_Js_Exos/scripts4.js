function ajouterTexte(){
    var listBox = document.getElementById("listBoxEx");
    console.log(listBox);
    var selectedText = listBox.options[listBox.selectedIndex].text;
    document.getElementById("textEx").value = selectedText;
}
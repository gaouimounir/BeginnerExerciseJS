/*

Voici quelques petits exercices pour venir travailler la manipulation du DOM en JS:
1- Créez une page web qui affiche une liste de tâches. L'utilisateur doit pouvoir ajouter une tâche à la liste en tapant du texte dans un champ de saisie et en appuyant sur un bouton "Ajouter". La tâche doit s'ajouter à la liste sans rafraîchir la page.

2- Créez une page web avec une image et un bouton "Cacher/Montrer". En cliquant sur le bouton, l'image doit apparaître ou disparaître en fondu.

3- Créez une page web avec un champ de saisie et un bouton "Rechercher". L'utilisateur doit pouvoir taper du texte dans le champ de saisie et appuyer sur le bouton pour effectuer une recherche dans une liste d'éléments affichés sur la page. Les éléments correspondants à la recherche doivent être mis en surbrillance.

4- Créez une page web avec une liste déroulante et un bouton "Sélectionner". Lorsque l'utilisateur sélectionne une option dans la liste déroulante et appuie sur le bouton "Sélectionner", le texte de l'option sélectionnée doit être affiché dans une zone de texte.

5- Créez une page web avec une zone de texte et un bouton "Compter". L'utilisateur doit pouvoir taper du texte dans la zone de texte et appuyer sur le bouton "Compter" pour compter le nombre de caractères dans le texte.


*/

/* Exo 1 */

function addTache() {
  document
    .getElementById("liste")
    .insertAdjacentHTML(
      "beforeend",
      "<li>" + document.getElementById("tache").value + "</li>"
    );
}

/* Exo 2 */

function cacherImg() {
  if (document.getElementById("image").style.display == "") {
    document.getElementById("image").style.display = "none";
  } else {
    document.getElementById("image").style.display = "";
  }
}

/* Exo 3 */

function search() {
  let input = document.getElementById("search-input");
  let list = document.getElementById("list").querySelectorAll("li");
  let result = new RegExp(input.value, "i");

  list.forEach((item) => {
    item.innerHTML = item.textContent.replace(
      result,
      '<b style="background-color: lightgreen">$&</b>'
    );
  });
}

/* Exo 4 */

function choisirTransport() {
  let selectionList = document.getElementById("select");
  let oneSelection = selectionList.options[selectionList.selectedIndex].text;
  document.getElementById("transport").value = oneSelection;
}

/* Exo 5 */

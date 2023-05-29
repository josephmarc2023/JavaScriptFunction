document.addEventListener("DOMContentLoaded", function() {
  var addButton = document.getElementById("addButton");
  var sortButton = document.getElementById("sortButton");
  var unsortButton = document.getElementById("unsortButton");
  var textInput = document.getElementById("textInput");
  var wordList = document.getElementById("wordList");
  var words = [];

  addButton.addEventListener("click", function() {
    var enteredText = textInput.value.trim();
    if (enteredText !== "") {
      words.push(enteredText);
      refreshWordList();
      textInput.value = "";
    }
  });

  sortButton.addEventListener("click", function() {
    words.sort();
    refreshWordList();
  });

  unsortButton.addEventListener("click", function() {
    words.reverse();
    refreshWordList();
  });

  function refreshWordList() {
    wordList.innerHTML = "";
    for (var i = 0; i < words.length; i++) {
      var divItem = document.createElement("div");
      divItem.textContent = words[i];
      wordList.appendChild(divItem);
    }
  }
});   
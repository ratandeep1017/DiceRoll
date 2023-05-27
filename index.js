function rolldice() {
  var result = Math.floor(Math.random() * 6) + 1;
  document.getElementById("roll-result").innerHTML =
    '<img src="dices/' + result + '.jpg" />';
  document.getElementById("p1").innerHTML = "You Got : " + result;
}

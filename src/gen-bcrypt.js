var bcrypt = require("bcrypt");
var $ = function (id) {
  return document.getElementById(id);
};

var getRounds = function () {
  return parseInt($("roundes").value || 10);
};

var getMinorVersion = function () {
  for (let child of $("version").children) {
    if (child.selected) {
      return child.value;
    }
  }
};

var getPassword = function () {
  return $("password").value;
}

$("exec").addEventListener("click", (event) => {
  var rounds = getRounds();       //12;
  var minor = getMinorVersion();  //"a";
  var password = getPassword()  || "Passw0rd";



  (async () => {
    var salt = await bcrypt.genSalt(rounds, minor);
    var hash = await bcrypt.hash(password, salt);

    $("result").innerHTML = "";
    $("result").appendChild(document.createTextNode(hash));
  })();
});

var d = new Date();
	document.getElementById("date").innerHTML = d;


function funcAffiche(x){
	var articles = document.getElementsByTagName('article');
	var titre = document.getElementsByTagName('h4');
	var tab = ["jeux", "accueil"]
	for (var i = 0; i < articles.length; i++) {
	
	if (articles[i].classList.contains(tab[x])){
		articles[i].classList.remove("hide");

	}
	else {
		articles[i].classList.add("hide");
	}
}
	for (var i = 0; i < titre.length; i++) {
	
	if (titre[i].classList.contains(tab[x])){
		titre[i].classList.remove("hide");

	}
	else {
		titre[i].classList.add("hide");
	}
}

}

function imgOver(ti, x) {
	var art = "art" + ti.id.substr(3);
	var img = "img" + ti.id.substr(3);
	if (x == 1) {
		var alt = document.getElementById(img).alt;
		document.getElementById(art).innerHTML = alt;
	} else {
		document.getElementById(art).innerHTML = "";
	}
}

function testtemps() {
    document.getElementById("test").innerHTML = parseInt(document.getElementById("test").innerHTML)+1;
    setTimeout('testtemps()',1000);
  }

document.getElementById("confirmer").onclick = function()
{
    confirm("Voulez vous confirmer ?");
 }


 
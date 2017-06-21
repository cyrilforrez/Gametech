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


document.getElementById("confirmer").onclick = function()
{
    confirm("Voulez vous confirmer ?");
 }

 document.getElementById("1").alt
 
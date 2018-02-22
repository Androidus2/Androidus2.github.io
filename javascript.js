var numar = 0;
var numar2 = 0;
var activ = 1;
var sens = 1;
var gradEcuatie = 0;
function AdaugaCifra(elem, cifra){
	var text = document.getElementById("AfisareNumere");
	if(activ==1){
		numar = numar * 10 + cifra;
		text.value = "" + numar;
	}
	else if(activ==2){
		numar2 = numar2 * 10 + cifra;
		text.value = "" + numar2;
	}
}
function Semn(elem, semn){
	var text = document.getElementById("AfisareNumere");
	if(semn=="+"){
		text.value = "";
		if(activ==2){
			numar+=numar2;
		}
		activ = 2;
		sens=1;
		gradEcuatie = 1;
	}
	else if(semn=="-"){
		if(activ==2){
			numar-=numar2;
		}
		text.value = "";
		activ = 2;
		sens=-1;
		gradEcuatie = 1;
	}
	else if(semn=="*"){
		if(activ==2){
			numar*=numar2;
		}
		text.value = "";
		activ = 2;
		sens=1;
		gradEcuatie = 2;
	}
	else if(semn=="/"){
		if(activ==2){
			numar/=numar2;
		}
		text.value = "";
		activ = 2;
		sens=-1;
		gradEcuatie = 2;
	}
	else if(semn=="^"){
		if(activ==2){
			var rez = 1;
			for(var i=0; i<numar2; i++){
				rez*=numar;
			}
			numar=rez;
		}
		text.value = "";
		activ = 2;
		sens=1;
		gradEcuatie = 3;
	}
	else if(semn=="√"){
		numar = Math.sqrt(numar);
		text.value = numar;
	}
	else if(semn=="←"){
		if(activ==1){
			numar=Math.floor(numar/10);
			text.value = numar;
		}
		else{
			numar2=Math.floor(numar2/10);
			text.value = numar2;
		}
	}
	else if(semn=="="){
		if(gradEcuatie == 1){
			numar2 *= sens;
			numar+=numar2;
		}
		else if(gradEcuatie == 2){
			if(sens==1){
				numar*=numar2;
			}
			else{
				numar/=numar2;
			}
		}
		else if(gradEcuatie == 3){
			var rez = 1;
			for(var i=0; i<numar2; i++){
				rez*=numar;
			}
			numar=rez;
		}
		text.value = numar;
		numar2=0;
		activ = 1;
		gradEcuatie = 1;
	}
}
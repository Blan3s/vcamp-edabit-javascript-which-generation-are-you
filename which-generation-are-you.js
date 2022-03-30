	
// Declaramos uma funcao que receba dois parametros

	function generation(x, y) {
// Declaramos os retornos esperados em funcao de genero e numero recebido com um switch case.
	if (y=="f"){
		switch (x){
	case 3:
	return "great granddaughter";
	case 2:
	return "granddaughter";
	case 1:
	return "daughter";
	case 0:
	return "me!";
	case -1:
	return "mother";
	case -2:
	return "grandmother";
	case -3:
	return "great grandmother";
		}
	}
		else if (y=="m"){
		
		switch (x){
	case 3:
	return "great grandson";
	case 2:
	return "grandson";
	case 1:
	return "son";
	case 0:
	return "me!";
	case -1:
	return "father";
	case -2:
	return "grandfather";
	case -3:
	return "great grandfather";
		}
  	}
}



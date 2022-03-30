//Declarar a funcao
function generation(x, y) {
	// Usar um condicional para determinar a resposta em funcao do genero
	if (y=="f"){
	// Com um switch case estabelecemos os retornos esperados para cada numero. 	
	switch (x){
	case 3:
	return "great granddaughter";
	case 2:
	return "granddaughter";
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
         // Podemos usar um else if porem ja que temos duas condicoes, usamos só um esse a pesar de esperar um "m". 	

	else {
		
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

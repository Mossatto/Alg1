Faculdade de Tecnologia de São Paulo (FATEC)

Desenvolvedor: Matheus Mossatto Galvão dos Santos

Descrição do problema:

Uma boa alimentação é essencial para uma vida saudável, e as proteínas são nutrientes importantes para o bom funcionamento de corpo e do desenvolvimento muscular.
Para cada tipo de objetivo, peso e nível de atividade física existe uma quantidade especifíca de proteínas que devem ser ingeridas diariamente, e muitas vezes isso é difícil de mensurar de maneiras rápida.
Para isso foi criada a calculadora de proteínas, que guiado pelo seu peso e nível de atividade física, recomenda certa quantidade de proteína, além de calcular a quantidade de alimento a ser ingerido.

Identificação das variáveis:

	 const massaCorporal = parseFloat(document.getElementById("massa-corporal").value)
    	 const nivelAtividade = document.getElementById("nivel-atividade").value
    	 
	Essas variáveis são inseridas pelo usuário, servindo como meio de cálculo da quantidade necessária.
	
	
	
	 let proteinaPorKg

    switch (nivelAtividade) {
        
        case "baixo":
            proteinaPorKg = 0.8            
            break;

        case "moderado":
            proteinaPorKg = 1.2
            break;
        
        case "alto":
            proteinaPorKg = 2
            break;
    
        default:
        
            break;
    }



	A variável proteinaPorKg depende do valor do nível de atividade fisíca inserida pelo usuário, mudando com base em cada um.
	
 	const proteinaDiaria = massaCorporal * proteinaPorKg;
 	
 	
 	
 	A segunda parte do algoritmo funciona da mesma maneira
 	
 	
	    const quantProteina = parseFloat(document.getElementById("quantidade-proteina").value)

	    const tipoAlimento = document.getElementById("alimento").value
	    
	    
	O usuário insere a quantidade de proteína que deseja consumir, e o alimento fonte, o qual varia na quantidade de proteina por g.
	
	
		   let razaoProteina

	    switch(tipoAlimento){

		case "frango":
		    razaoProteina = 0.27
		    break;
		
		case "peixe":
		    razaoProteina = 0.22
		    break;

		case "ovo":
		    razaoProteina = 0.13
		    break;

		case "feijao":
		    razaoProteina = 0.21
		    break;
		
		case "boi":
		    razaoProteina = 0.26
		    break;

		case "whey":
		    razaoProteina = 0.87
		    break;

		case "porco":
		    razaoProteina = 0.27
		    break;
		
		case "soja":
		    razaoProteina = 0.46
		    break; 
	    }


	Identificado o alimento é feito o seguinte cálculo:
	
	   const quantNecesária = quantProteina / razaoProteina
	   
	Esse valor representa a quantidade necessária do alimento para suprir a quantidade de proteínas ingerida.


https://cute-pavlova-2751ec.netlify.app/

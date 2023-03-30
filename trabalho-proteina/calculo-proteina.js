/* Obtém o formulário e adiciona um evento de envio */

const proteinaForm = document.getElementById("proteina-form");

proteinaForm.addEventListener("submit", function(event){

    event.preventDefault(); /* previne o envio do formulário */

    /* Obtém os valores inseridos pelo usuário */

    const massaCorporal = parseFloat(document.getElementById("massa-corporal").value)
    const nivelAtividade = document.getElementById("nivel-atividade").value

    /*  Define a quantidade de proteína necessária por kg de massa corporal */

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


    
    /* Calcula a quantidade diária de proteína necessária */
    const proteinaDiaria = massaCorporal * proteinaPorKg;
    

    /* Exibe o resultado para o usuário */

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Você precisa consumir ${proteinaDiaria.toFixed(1)} g de proteína por dia`


})



const formAlimento = document.getElementById("alimento-form")

formAlimento.addEventListener("submit", function(event){
    event.preventDefault();

    const quantProteina = parseFloat(document.getElementById("quantidade-proteina").value)

    const tipoAlimento = document.getElementById("alimento").value


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


    const quantNecesária = quantProteina / razaoProteina

    console.log(quantNecesária)

    const resultadoDiv2 = document.getElementById("resultado-proteina");
    resultadoDiv2.innerHTML = `Você precisa consumir ${quantNecesária.toFixed(1)} g desse alimento para suprir sua necessidade de proteína`
})

alert('BIENVENIDOS AL JUEGO !NUMERO SECRETO¡');
numeroInferior = prompt('Desde que Número quieres jugar:');
numeroSup = prompt('Hasta que Número quieres jugar');
maximosIntentos = prompt('Cuantos intentos quieres hacer:');

let numeroSecreto = Math.floor(Math.random()*numeroSup)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre ${numeroInferior} y ${numeroSup} por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
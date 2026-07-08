const ecran = document.getElementById('ecran');
const boutons = document.querySelectorAll('.btn');
let operation = '';

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const valeur = bouton.innerText;

        if(valeur === 'C') {
            operation = '';
            ecran.innerText = '0';
        }
        else if(valeur === 'DEL') {
            operation = operation.slice(0, -1);
            ecran.innerText = operation || '0';
        }
        else if(valeur === '=') {
            try {
                operation = eval(operation).toString();
                ecran.innerText = operation;
            } catch {
                ecran.innerText = 'Erreur';
                operation = '';
            }
        }
        else {
            if(operation === '0') operation = '';
            operation += valeur;
            ecran.innerText = operation;
        }
    });
});
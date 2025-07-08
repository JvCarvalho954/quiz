let indx = 0;
const ponteiro = document.getElementById("indx")

const pergunta = document.getElementById("pergunta")
const r1 = document.getElementById("l1")
const r2 = document.getElementById("l2")
const r3 = document.getElementById("l3")
const r4 = document.getElementById("l4")
const a1 = document.getElementById("r1")
const dica = document.getElementById("dica")

const levels = [["O que é criptografia?", "Um processo para apagar dados antigos", "Uma técnica para comprimir arquivos", "um prato francês", "Um método de transformar informações para protegê-las", 4, "...---..."],
["Qual é o principal objetivo da criptografia?", "Aumentar a velocidade da internet", "Melhorar o design de uma página", "Proteger informações contra acessos não autorizados", "Criar senhas automáticas", 3, "Escondem verdades"]
["O que é o processo de decriptografia?", "Apagar um arquivo criptografado", "Tornar um texto mais confuso", "Converter um texto criptografado de volta ao formato original","Enviar dados para a nuvem", 3, "Inverso"]
]

ponteiro.textContent = indx+1
pergunta.textContent = levels[indx][0]
r1.textContent = levels[indx][1]
r2.textContent = levels[indx][2]
r3.textContent = levels[indx][3]
r4.textContent = levels[indx][4]
dica.textContent = levels[indx][6]

let selected = document.querySelector('input[name="answer"]:checked');
let res = parseInt(selected.value);
function passar() {
    event.preventDefault();
    if (res == levels[indx][5]){
        indx++;
        ponteiro.textContent = indx
        r1.textContent = levels[indx][1]
        r2.textContent = levels[indx][2]
        r3.textContent = levels[indx][3]
        r4.textContent = levels[indx][4]
        dica.textContent = ""
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    })

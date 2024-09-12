const nomes = ["Nathalia", "Roberta", "Maria Eduarda", "Vyctor Alexandry", "Manoele", "Felipe", "Israel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)

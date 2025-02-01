
export function getList(){
    const endpoint = [
        {
            id:0, 
            nomeLista:"Mercado" , 
            dadosLista:[
                {id:1, valor:"Pão Frânces", status:"Pendente"},
                {id:2, valor:"Mamão", status:"Pendente"},
                {id:3, valor:"Abacate", status:"Pendente"}
            ]
        },
        {
            id:1, 
            nomeLista:"Tarefas" , 
            dadosLista:[
                {id:1, valor:"Estudar Arquitetura Monolitica", status:"Concluido"},
                {id:2, valor:"Estudar Arquitetura Microservices", status:"Pendente"},
                {id:3, valor:"Criar o Zyron", status:"Em Andamento"}
            ]
        }
    ];
    return endpoint;
}
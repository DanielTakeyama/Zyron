
export function getList(){
    const endpoint = [
        {
            id:0, 
            nomeLista:"Mercado" , 
            dadosLista:[
                {id:1, valor:"Pão Frânces", status:"Completo"},
                {id:2, valor:"Mamão", status:"Pendente"},
                {id:3, valor:"Arroz", status:"Pendente"},
                {id:4, valor:"Feijão", status:"Pendente"},
                {id:5, valor:"Alcatra para churrasco", status:"Pendente"},
                {id:6, valor:"Patinho moido (Hamburguer)", status:"Pendente"},
                {id:7, valor:"Frango Desfiado", status:"Pendente"},
                {id:8, valor:"Lombinho", status:"Pendente"},
                {id:9, valor:"Picanha para assar", status:"Pendente"},
                {id:10, valor:"Carne Chark", status:"Pendente"},
                {id:11, valor:"Detergente", status:"Em Andamento"},
                {id:12, valor:"Papel Higienico", status:"Pendente"},
                {id:13, valor:"Desodorante", status:"Pendente"},
                {id:14, valor:"Água sanitaria", status:"Pendente"},
                {id:15, valor:"Sabão em pó", status:"Pendente"},
                {id:16, valor:"Amaciante", status:"Pendente"},
                {id:17, valor:"Barrinha Proteica", status:"Completo"},
                {id:18, valor:"Cacau show", status:"Pendente"},
                {id:19, valor:"Queijo", status:"Pendente"},
                {id:20, valor:"Bacon", status:"Pendente"},
                {id:21, valor:"Presunto", status:"Pendente"},
                {id:22, valor:"Calabresa", status:"Pendente"},
                {id:23, valor:"Salame", status:"Pendente"}
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
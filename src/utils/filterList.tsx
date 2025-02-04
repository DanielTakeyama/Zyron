import React from 'react'
import StatusPending from '../components/molecules/status/statusPending.tsx';
import StatusProgress from '../components/molecules/status/statusProgress.tsx';
import StatusCompleted from '../components/molecules/status/statusCompleted.tsx';

interface ListItem{
    id: number;
    nomeLista: string;
    dadosLista: {id:number, valor:string, status:string}[];
}


export function filterList(array:ListItem[], nameList: string | null):React.ReactNode[]{
    const filteredData = array.filter((obj)=>obj.nomeLista === nameList);    

    if(filteredData.length > 0){
        const data = filteredData.flatMap(
            (obj)=>obj.dadosLista.map(
                (item) => {
                            let statusComponent;
                            if(item.status === "Pendente"){
                                statusComponent = <StatusPending text={item.status}/>
                            }else if(item.status === "Em Andamento"){
                                statusComponent = <StatusProgress text={item.status}/>
                            } else {
                                statusComponent = <StatusCompleted text={item.status}/>
                            }
                            
                            return (
                                <li className="itemLista fontPDefault" key={item.id}>
                                    {item.valor} {statusComponent}
                                </li>
                            );
            })//Fim do Map
        )//Fim do FlatMap
        return data
    } else {
        return [<li className="itemLista fontPDefault" key="no-data">Você não possui dados cadastrados nessa lista!</li>]
    }
}  
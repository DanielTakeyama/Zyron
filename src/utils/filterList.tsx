import React from 'react'
import StatusPending from '../components/molecules/status/statuspending.tsx';
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
                item=><li className="itemLista fontPDefault" key={item.id}>{item.valor} <StatusCompleted text={item.status}/></li>
            )//Fim do Map
        )//Fim do FlatMap
        return data
    } else {
        return [<li className="itemLista fontPDefault" key="no-data">Você não possui dados cadastrados nessa lista!</li>]
    }
}  
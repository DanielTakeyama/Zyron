import './dataList.css';
import '../../../styles/base.css'
import React from 'react';


interface DataDashboardProps{
    lista: string | null;
}



export default function DataDashboard( {lista}:DataDashboardProps ){
    const dataDB = [{id:0, lista:"Mercado" , item:"Comprar Pão"},
                    {id:1, lista:"Tarefas" , item:"Fazer o trabalho de arquitetura"}
    ];

    const datas = dataDB.map(
            (data) => <li className="itemLista fontPDefault" key={data.id}>{data.item}</li>
        );//Fim do MAP*/
    return(
        <ul className="containerItemLista">
            {datas}
        </ul>
    );
}
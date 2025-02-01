import React from 'react'

interface ListItem{
    id: number;
    nomeLista: string;
    dadosLista: {id:number, valor:string, status:string}[];
}


export function filterList(array:ListItem[], nameList: string | null):React.ReactNode[]{
    const filteredData = array.filter((obj)=>obj.nomeLista === nameList);    
    const data = filteredData.flatMap((obj)=>obj.dadosLista.map(item=><li className="itemLista fontPDefault" key={item.id}>{item.valor} - Status: {item.status}</li>))
    return data
}  
import './dataList.css';
import '../../../styles/base.css'
import React from 'react';
import { getList } from '../../../services/getList.tsx';
import { filterList } from '../../../utils/filterList.tsx';

interface DataDashboardProps{
    lista: string | null;
}


export default function DataDashboard( {lista}:DataDashboardProps ){
    const data = getList();
    
    return(
        <ul className="containerItemLista scrollBar">
            {
                filterList(data, lista)
            }
        </ul>
    );
}

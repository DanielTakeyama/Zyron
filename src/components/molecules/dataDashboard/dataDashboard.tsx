import './dataDashboard.css';
import '../../../styles/base.css'
import React from 'react';
import ButtonAdd from '../../atoms/buttons/buttonAdd.tsx';
import ButtonFilter from '../../atoms/buttons/buttonFilter.tsx';
import Data from '../../atoms/dataDashboard/dataList.tsx';
import { useSearchParams } from 'react-router-dom';


export default function DataDashboard(){
    const [searchParams] = useSearchParams();
    const list = searchParams.get("list");

    return (
        <section className="containerAllData">
            <section className="containerTitleData">
                <h1 className="fontH2 titleData">{!list ? "Dashboard" : list}</h1>
            </section>
            
            <section className={!list ? "invisible" : "containerActionButtons"}>
                <ButtonAdd list={list} />
                <ButtonFilter list={list} />
            </section>

            <section className="containerDataDb">
                <Data lista={list}/>
            </section>
        </section>
    );
}
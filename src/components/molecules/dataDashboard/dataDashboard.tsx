import './dataDashboard.css';
import '../../../styles/base.css'
import React from 'react';
import ButtonAdd from '../../atoms/buttons/buttonAdd.tsx';
import ButtonFilter from '../../atoms/buttons/buttonFilter.tsx';
import Data from '../../atoms/dataDashboard/dataList.tsx';
import { useSearchParams } from 'react-router-dom';


export default function DataDashboard(){
    const [searchParams] = useSearchParams();
    const listValueGet = searchParams.get("list");

    return (
        <section className="containerAllData">
            <section className="containerTitleData">
                <h1 className="fontH2 titleData">{!listValueGet ? "Dashboard" : listValueGet}</h1>
            </section>
            
            <section className={!listValueGet ? "invisible" : "containerActionButtons"}>
                <ButtonAdd list={listValueGet} />
                <ButtonFilter list={listValueGet} />
            </section>

            <section className="containerDataDb">
                <Data lista={listValueGet}/>
            </section>
        </section>
    );
}
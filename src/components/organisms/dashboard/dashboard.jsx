import SideMenu from '../../molecules/sideMenu/sideMenu';
import SupMenu from '../../molecules/supMenu/supMenu';
import DataDashboard from '../../molecules/dataDashboard/dataDashboard.tsx';
import DashboardStructure from '../../molecules/dashboardStructure/dashboardStructure';


export default function Dashboard(){
    return (
        <DashboardStructure 
            dataSideMenu={<SideMenu/>}
            dataSupMenu={<SupMenu/>}
            data={<DataDashboard/>}
        />
    );
}
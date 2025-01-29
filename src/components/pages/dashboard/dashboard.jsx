import './dashboard.css'
import SideMenu from '../../molecules/sideMenu/sideMenu';
import SupMenu from '../../molecules/supMenu/supMenu';
import Content from '../../molecules/content/content';

export default function Dashboard(){
    return (
        <main className="containerDashboard">
            <nav className="containerDashboardSideMenu">
                <SideMenu />
            </nav>
            <section className="containerDashboardData">
                <SupMenu />
                <Content />
            </section>
        </main>
    );
}
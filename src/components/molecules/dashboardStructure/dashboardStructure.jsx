import ContainerMain from '../../atoms/containers/main';/* Container PAI de todos  */
import ContainerSideMenu from '../../atoms/containers/containersDashboard/sideMenu';/* Container PAI do menu lateral */
import ContainerContent from '../../atoms/containers/containersDashboard/contentMain';/* Container PAI do menu superior + conteudo principal */
import ContainerSupMenu from '../../atoms/containers/containersDashboard/supMenu';/* Container PAI do menu superior  */
import ContainerData from '../../atoms/containers/containersDashboard/data';/* Container PAI da onde será exibido todos as informações das listas ou dashboard  */


export default function DashboardStructure({dataSideMenu, dataSupMenu, data}){
    return(
        <ContainerMain>
{/* ------------------------------------------------------------ */}
            <ContainerSideMenu>
                { dataSideMenu }
            </ContainerSideMenu>
{/* ------------------------------------------------------------ */}
            <ContainerContent>
{/* ------------------------------------------------------------ */}
                <ContainerSupMenu>
                    { dataSupMenu }
                </ContainerSupMenu>
{/* ------------------------------------------------------------ */}
                <ContainerData>
                    { data }
                </ContainerData>
{/* ------------------------------------------------------------ */} 
            </ContainerContent>            
        </ContainerMain>
    );
}
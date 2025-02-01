import './sideMenu.css';

export default function ContainerSideMenu( { children } ){
    return (
        <nav className="containerSideMenu">
            {children}
        </nav>
    );
}
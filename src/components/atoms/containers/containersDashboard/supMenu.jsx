import './supMenu.css';

export default function SupMenu( { children } ){
    return (
        <section className="supMenu">
            { children }
        </section>
    );
}
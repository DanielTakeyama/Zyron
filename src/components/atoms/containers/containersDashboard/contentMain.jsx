import './contentMain.css';

export default function ContentMain( { children } ){
    return (
        <section className="contentMain">
            { children }
        </section>
    );
}
import './data.css';
import '../../../../styles/base.css';

export default function Data( { children } ){
    return (
        <section className="data shadowDefault">
            { children }
        </section>
    );
}
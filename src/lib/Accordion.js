import "../css/labels.css"

export default function Accordion({ className="", style="", children }) {
    return <main className={`theaccordion ${ className }`} style={{ style }}>{children}</main>;
}

Accordion.Section = function Section({ className="", style="", children }) {    
    return <div className={`theaccordion-section ${ className }`} style={{ style }}>{children}</div>;
};

Accordion.Title = function Title({ className="", style="", children }) {
    const toggle = function(event){
        event.currentTarget.parentNode.classList.toggle('desplegar');
    }
    return <h3 onClick={ toggle } className={`theaccordion-title ${ className }`} style={{ style }}>{children}</h3>;
};

Accordion.Content = function Content({ className="", style="", children }) {
    return <div className={`theaccordion-content ${ className }`} style={{ style }}>{children}</div>;
};

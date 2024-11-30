import "../css/labels.css"

export default function Modal({ classBg="", classContent="", styleBg="", styleContent="", children, visible, trigger }) {
    return (
        <>
        <section className={`themodal_bg ${ classBg }`} style={{ styleBg }} onClick={ trigger } data-visible={ visible }></section>
        <section className={`themodal_content ${ classContent }`} style={{ styleContent }} data-visible={ visible }>
            <span onClick={ trigger }>x</span>
            { children }
        </section>
        </>
    )
}
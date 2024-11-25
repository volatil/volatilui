export default button = function({ className="", style={}, onClick=false, color_fondo, color_text, children }) {
    return (
        <button { ...onClick && { onClick } } className={`${ labels.button } ${ className }`} style={{ background: color_fondo, color: color_text, ...style }}>{ children }</button>
    )
};
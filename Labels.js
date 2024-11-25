import labels from "@css/labels.module.css";
import Svg from "@components/Svg";

export const Button = function({ className="", style={}, onClick=false, color_fondo, color_text, children }) {
    return (
        <button { ...onClick && { onClick } } className={`${ labels.button } ${ className }`} style={{ background: color_fondo, color: color_text, ...style }}>{ children }</button>
    )
};

export const Input = function ({ onChange = () => {}, style={}, className="", label, value, type = "text", accept="image/png, image/jpeg", disabled, nombrearchivo }) {
    return (
        type === "file"
        ? (
            <Button className={ labels.typefile + " " + className } style={{ position: "relative" }}>
                <input onChange={ onChange } type="file" accept={ accept } />
                <Svg style={{ height: "15px" }} icono="upload" color="var( --gris )" />
                <p>{ nombrearchivo ? nombrearchivo : "Cargar imagen" }</p>
            </Button>
        )
        : (
            <div
                style={ style }
                data-type={ type }
                className={ labels.campo + " " + className }
            >
                <input
                    data-pista={ label }
                    type={ type }
                    defaultValue={ value }
                    disabled={ disabled }
                    required
                />
                { type === "file" && <Svg style={{ width: "40px" }} icono="upload" color="var( --gris )" /> }
                <label htmlFor={ label }> { label } </label>
            </div>
        )
    )
}

export const Textarea = function({ style={}, className="", label, value, type, disabled, placeholder="" }) {
    return (
        <div style={ style } className={ labels.campo + " " + className }>
            <textarea data-pista={ label } defaultValue={ value } disabled={ disabled } placeholder={ placeholder } required></textarea>
            <label htmlFor={ label }>{ label }</label>
        </div>
    )
}
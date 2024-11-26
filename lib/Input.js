import css from "../css/labels.module.css";
import Svg from "../components/Svg";

export const Input = function ({ onChange = () => {}, style={}, className="", label, value, type = "text", accept="image/png, image/jpeg", disabled, nombrearchivo }) {
    return (
        type === "file"
        ? (
            <Button className={ css.typefile + " " + className } style={{ position: "relative" }}>
                <input onChange={ onChange } type="file" accept={ accept } />
                <Svg style={{ height: "15px" }} icono="upload" color="var( --gris )" />
                <p>{ nombrearchivo ? nombrearchivo : "Cargar imagen" }</p>
            </Button>
        )
        : (
            <div
                style={ style }
                data-type={ type }
                className={ css.campo + " " + className }
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
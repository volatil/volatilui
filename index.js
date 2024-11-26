export const saludar = function(nombre) {
    return (
        <div>
            <h1 style={{ fontWeight: "300" }}>Soy el <strong style={{ textTransform: "uppercase" }}>{ nombre }</strong></h1>
        </div>
    )
}
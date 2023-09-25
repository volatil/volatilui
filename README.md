# VolatilUI

v0.1

## Uso/Ejemplo

```javascript
// USO
dropdown({
	donde: {clase o id donde se imprimira la data} ,
	id: {nombre identificador, no debe repetirse} ,
	valorinicial: {Es el valor que aparecera como si fuera el primer option} ,
	options: {Array de opciones}
})

// EJEMPLO
dropdown({
	donde: ".losdeportes" ,
	id: "misdeportesfavoritos" ,
	valorinicial: "Selecciona tu deporte favorito" ,
	options: ["Futbol", "Tenis", "Basketball", "Volleyball", "Surf", "Skate"]
});
```
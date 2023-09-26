# VolatilUI (v0.1)

## DROPDOWN
### Uso

```javascript
dropdown({
	donde: {clase o id donde se imprimira la data} ,
	id: {nombre identificador, no debe repetirse} ,
	valorinicial: {Es el valor que aparecera como si fuera el primer option} ,
	options: {Array de opciones}
})
```

### Ejemplo

```javascript
dropdown({
	donde: ".losdeportes" ,
	id: "misdeportesfavoritos" ,
	valorinicial: "Selecciona tu deporte favorito" ,
	options: ["Futbol", "Tenis", "Basketball", "Volleyball", "Surf", "Skate"]
});
```





## TOOLTIP
### Uso

```javascript
tooltip({
	donde: {clase o id donde se imprimira la data} ,
	id: {nombre identificador, no debe repetirse} ,
	direccion: {direccion en la que se desplegara el mensaje del tooltip} ,
	mensaje: {mensaje visible} ,
	mensajetooltip: {mensaje del globito} ,
});
```

### Ejemplo

```javascript
tooltip({
	donde: ".eltooltip",
	id: "identificador1353" ,
	direccion: "derecha" ,
	mensaje: "sobre mi" ,
	mensajetooltip: "hola !" ,
});
```

### Usado por

Este proyecto es utilizado por las siguientes empresas:

- Buscalibre
- Atemooch

## Soporte

Para obtener ayuda, envíe un correo electrónico a contacto@volatil.cl


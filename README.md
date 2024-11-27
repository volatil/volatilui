# Volatil UI

A simple UI library for React.

## Installation

```bash
npm i volatilui
```
<!-- 
```bash
npm run build
```

```bash
npm publish
```
-->

## Use

### BUTTON
📋 PARAMETERS
```bash
className, style, onClick, color_fondo, color_text, children
```

Example:
```bash
<Button 
    className={ css.boton } 
    style={ marginTop: "10px" } 
    color_fondo="cyan"
    color_text="black"
/>
```

### INPUT
📋 PARAMETERS
```bash
onChange, style, className, label, value, type, accept="image/png, image/jpeg", disabled
```

Example:
```bash
<Input 
    onChange={ getValue }
    className={ css.boton } 
    style={ marginTop: "10px" } 
    label="Mail"
    value="contacto@volatil.cl"
    type="text" // "text", "number", "file"
    accept="image/png, image/jpeg"
    disabled
/>
```

### SELECT
📋 PARAMETERS
```bash
className, style, children, label
```

Example:
```bash
<Select className={ css.theselect } style={ zIndex: "9" } label="Choose the best">
    <option value="empty">...</option>
    <option value="Cristiano Ronaldo">Cristiano Ronaldo</option>
    <option value="Leonel Messi">Leonel Messi</option>
    <option value="Ronaldinho">Ronaldinho</option>
    <option value="Marcelo Salas">Marcelo Salas</option>
</Select>
```

### TEXTAREA
📋 PARAMETERS
```bash
className, style, label, value, type, disabled, placeholder
```

Example:
```bash
<Input 
    className={ css.email } 
    style={ borderTop: "10px" } 
    label="Mail" 
    type="mail"
    placeholder="contacto@volatil.cl" 
    disabled="false" 
/>
```












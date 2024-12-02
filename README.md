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

### CHECKBOX
📋 PARAMETERS
```bash
className, style, label, checked, disabled
```

Example:
```bash
<Checkbox label="Marcelo Salas" checked />
<Checkbox label="Marcelo Diaz" />
<Checkbox label="Johnny Herrera" disabled />
<Checkbox label="Eduardo Vargas" disabled checked />
```

### RADIO
📋 PARAMETERS
```bash
className, style, labels, color_check, color_text
```

Example:
```bash
<Radio
    className="theradio"
    style={{ border: "1px solid #bbb" }}
    labels={[ "Golf", "Futbol", "MMA", "Padel", "Tenis" ]}
    color_text="blue"
    color_check="blue"
/>
```

### MODAL
📋 PARAMETERS
```bash
classBg, classContent, styleBg, styleContent, children, visible, trigger
```

Example:
```bash
"use client";
import { useState } from "react"

export default function Test() {
    const [ modalVisible, setmodalVisible ] = useState( false );
    
    const toggleModal = () => {
        setmodalVisible( !modalVisible );
    }
    
    <Modal visible={ modalVisible } trigger={ toggleModal }>
        <h2>Random title</h2>
        <p>ingredients:</p>
        <ul>
            <li>2 apples</li>
            <li>1 banana</li>
            <li>1lt milk</li>
            <li>nuts</li>
        </ul>
    </Modal>
    <Button onClick={ toggleModal }>Deploy Modal</Button>
}
```

### ACCORDION
📋 PARAMETERS
```bash
className, style
```

Example:
```bash
<Accordion>
    <Accordion.Section>
        <Accordion.Title>Is it accessible? <Svg icono="faq_arrow_down" color="#bbb" /></Accordion.Title>
        <Accordion.Content>
            <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
            <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
            <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
        </Accordion.Content>
    </Accordion.Section>
    
    <Accordion.Section>
        <Accordion.Title>Is it customizable? <Svg icono="faq_arrow_down" color="#bbb" /></Accordion.Title>
        <Accordion.Content>
            <p>Yes. You can customize it with your own styles.</p>
        </Accordion.Content>
    </Accordion.Section>
    
    <Accordion.Section>
        <Accordion.Title>Is it responsive? <Svg icono="faq_arrow_down" color="#bbb" /></Accordion.Title>
        <Accordion.Content>
            <p>Yes. It's responsive by default, but you can disable it if you prefer.</p>
        </Accordion.Content>
    </Accordion.Section>
    
    <Accordion.Section>
        <Accordion.Title>Is it styled? <Svg icono="faq_arrow_down" color="#bbb" /></Accordion.Title>
        <Accordion.Content>
            <p>Yes. It comes with default styles that match the other components' aesthetic.</p>
        </Accordion.Content>
    </Accordion.Section>
    
    <Accordion.Section>
        <Accordion.Title>Is it animated? <Svg icono="faq_arrow_down" color="#bbb" /></Accordion.Title>
        <Accordion.Content>
            <p>Yes. It's animated by default, but you can disable it if you prefer.</p>
        </Accordion.Content>
    </Accordion.Section>
</Accordion>
```

### SWITCH
📋 PARAMETERS
```bash
className, style, label, onClick
```

Example:
```bash
<Switch label="Darkmode" />
<Switch label={["On", "Off"]} />
```
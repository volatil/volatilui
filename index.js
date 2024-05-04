class BLInputRadio extends HTMLElement {
    constructor() { super() }
    
    connectedCallback() {
        const name = this.getAttribute("name")
        const value = this.getAttribute("value")
        const checked = this.getAttribute("checked")
        const disabled = this.getAttribute("disabled")
        
        this.innerHTML = `
            <div data-tag="inputradio" data-trigger="${name}" ${ checked ? "class='activo'" : "" } ${ disabled ? "data-disabled=true" : "" }>
                <div class="circulo">
                    <span></span>
                </div>
                <input type="radio" id="${ value }" name="${name}" value="${name}" ${ checked ? "checked" : null } ${ disabled ? "disabled" : "" } >
                <label for="${ value }">${value ? value : "falta el attr 'value'" }</label>
            </div>
        `;
        
        $(`[data-tag="inputradio"][data-trigger='${name}']`).on("click", function() {
            if ( $(this).attr("data-disabled") ) return false

            $(`[data-tag="inputradio"][data-trigger='${name}']`).removeClass("activo");
            $(this).addClass("activo");
        })
    }
}window.customElements.define("bl-inputradio", BLInputRadio)

class BLInputCheckbox extends HTMLElement {
    constructor() { super() }
    
    connectedCallback() {
        const value = this.getAttribute("value")
        const checked = this.getAttribute("checked")
        const disabled = this.getAttribute("disabled")
        
        this.innerHTML = `
            <div data-tag="inputcheckbox" data-trigger="${value}" ${ checked ? "class='activo'" : "" } ${ disabled ? "data-disabled=true" : "" }>
                <div class="circulo">
                    <span></span>
                </div>
                <input type="checkbox" id="${ value }" ${ checked ? "checked" : "" } ${ disabled ? "disabled" : "" }>
                <p>${ value }</p>
            </div>
        `;
        
        $(`[data-tag="inputcheckbox"][data-trigger='${value}']`).on("click", function() {
            const input = $(this).find("input")
            if ( input.attr("disabled") ) return false
            if (input.attr("checked")) {
                input.removeAttr("checked")
                $(this).removeClass("activo")
            } else {
                input.attr("checked", true)
                $(this).addClass("activo")
            }
        })
    }
}window.customElements.define("bl-inputcheckbox", BLInputCheckbox)

class BLInputText extends HTMLElement {
    constructor() { super() }
    
    connectedCallback() {
        const value = this.getAttribute("value");
        const placeholder = this.getAttribute("placeholder") || "";
        const disabled = this.getAttribute("disabled")
        
        this.innerHTML = `
            <div data-tag="inputtext" data-trigger="${value}" ${ disabled ? "data-disabled=true" : "" }>
                <input type="text"  ${ disabled ? "disabled=true" : "" } value='${ value || " " }'>
                <label>${ placeholder }</label>
            </div>
        `;
    }
}window.customElements.define("bl-inputtext", BLInputText)























class BLCode extends HTMLElement {
    constructor() { super() }
    
    connectedCallback() {
        const id = this.getAttribute("id");
        const codigo = this.getAttribute("codigo")
        
        this.innerHTML = `
            <div data-tag="code" data-trigger="${ id }">
                <div class="copiar">Copiar</div>
                <div class="codigo">${ codigo }</div>
            </div>
        `;
    }
}window.customElements.define("bl-code", BLCode)
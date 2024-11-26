// import React from 'react';
import "../css/labels.css"

export default function Textarea({ style={}, className="", label, value, type, disabled, placeholder="" }) {
    return (
        <div style={ style } className={`elcampo ${ className }`}>
            <textarea data-pista={ label } defaultValue={ value } disabled={ disabled } placeholder={ placeholder } required></textarea>
            <label htmlFor={ label }>{ label }</label>
        </div>
    )
}
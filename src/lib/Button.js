import React from 'react';
import "../css/labels.css"

export default function Button({ className="", style={}, onClick=false, color_fondo, color_text, children }) {
    return (
        <button { ...onClick && { onClick } } className={`elbutton ${ className }`} style={{ background: color_fondo, color: color_text, ...style }}>{ children }</button>
    )
};


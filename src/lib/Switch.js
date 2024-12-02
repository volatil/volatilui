"use client"
import { useState } from "react";
import "../css/labels.css";

export default function Switch({ className="", style="", label, onClick }) {
    const [ stateSwitch, setstateSwitch ] = useState( true );
    
    const esStringOArray = function( variable ) {
        if ( typeof variable === "string" ) {
            return "string";
        } else if ( Array.isArray( variable ) ) {
            return "array";
        }
        alert("Error: The label must be a string or an array.");
    }
    const toggle = () => {
        setstateSwitch( !stateSwitch );
    }
    
    return (
        <label
            onClick={ (e) => { toggle(); if (onClick) onClick(e); } }
            className={`theswitch ${ className }`}
            style={{ style }}
            data-switch={ stateSwitch }
            data-type-label={ esStringOArray(label) }
        >
            <div>
                <span></span>
            </div>
            {
                esStringOArray( label ) == "string"
                ? <p>{ label }</p>
                : <p>{ stateSwitch ? label[0]: label[1] }</p>
            }
        </label>
    )
}
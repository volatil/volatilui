"use client"
import { useState } from "react"
import "../css/labels.css"

export default function Radio({ className="", style, labels, color_check, color_text }) {
    const [ stateChecked, setstateChecked ] = useState( false );
    const [ stateLabel, setstateLabel ] = useState( "" );
    const radio = {
        unchecked: <svg viewBox="0 0 24 24"><path fill="none" stroke={ color_check ? color_check : "black" } strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0"/></svg> ,
        checked: <svg viewBox="0 0 16 16"><path fill={ color_check ? color_check : "black" } d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"/><circle cx="8" cy="8" r="4" fill={ color_check ? color_check : "black" }/></svg> ,
    }
    const toggle = function( label ) {
        setstateChecked( !stateChecked );
        setstateLabel( label );
    }
    
    return (
        <section className={`elradio ${ className }`} data-label={ stateLabel } style={ style }>
            {
                labels.map( function(label, i) {
                    return (
                        <div
                            key={ i }
                            onClick={ () => toggle( label ) }
                        >
                            <div>{ label == stateLabel ? radio.checked : radio.unchecked }</div>
                            <p style={ color_text ? { color: color_text } : {} }>{ label }</p>
                        </div>
                    )
                })
            }
        </section>
    )
}
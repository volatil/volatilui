"use client";

import { useState, useEffect } from "react";
import "../css/labels.css"

export default function Select({ className, style, children, label }) {
    const [ stateDesplegado, setstateDesplegado ] = useState( false );
    const [ stateOption, setstateOption ] = useState( children[0].props.children );
    const [ stateOptionValue, setstateOptionValue ] = useState( children[0].props.value );
    const arrow = {
        up: <svg viewBox='0 0 24 24'><path fill='none' stroke='black' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='m17 14l-5-5m0 0l-5 5'/></svg> ,
        down: <svg viewBox='0 0 24 24'><path fill='none' stroke='black' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='m7 10l5 5m0 0l5-5'/></svg> ,
    }
    const clickOut = function() {
        setstateDesplegado(false);
    }
    const toggle = function() {
        setstateDesplegado( !stateDesplegado );
    }
    
    useEffect(() => {
        const toggleClickOut = (e) => {
            if (!e.target.closest('.elselect')) {
                clickOut();
            }
        };

        document.body.addEventListener('click', toggleClickOut);

        return () => {
            document.body.removeEventListener('click', toggleClickOut);
        };
    }, []);
    
    return (
        <>
            <div className={`elselect ${ className }`} onClick={ toggle } data-desplegado={ stateDesplegado } data-value={ stateOptionValue } data-option={ stateOption }>
                <div className="principal">
                    <div className="label">{ label ? label : null }</div>
                    { children ? <div className="option" data-value={ stateOptionValue }>{ stateOption }</div> : null }
                    <div className="arrow">{ stateDesplegado ? arrow.up : arrow.down }</div>
                </div>
                <div className="options">
                    { children 
                        ? children.map((child, index) => {
                            return <div key={ index } data-active={ stateOption == child.props.children ? "true" : "false"  } className="option" onClick={ () => ( setstateOption( child.props.children ), setstateOptionValue( child.props.value ) ) } data-value={ child.props.value }>{ child.props.children }</div>
                        })
                        : null 
                    }
                </div>
            
                <select className={ className } style={{ style }}>
                    { children ? children : null }
                </select>
            </div>
        </>
    )
}
"use client"

import { useState } from "react"
import "../css/labels.css"

export default function Checkbox({ className="", style, label, checked, disabled }) {
    const [ stateChecked, setstateChecked ] = useState( checked ? true : false );
    const check = {
        checked: <svg viewBox="0 0 24 24"><g fill="none"><rect width="18.5" height="18.5" x="2.75" y="2.75" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" rx="4"/><path fill="black" d="M7.113 6.25a.86.86 0 0 0-.863.862v9.775c0 .477.386.863.862.863h9.775a.863.863 0 0 0 .863-.863V7.114a.863.863 0 0 0-.863-.863z"/></g></svg> ,
        uncheked: <svg viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2"/></svg> ,
    }
    const toggle = function() {
        setstateChecked( !stateChecked );
    }
    
    return (
        <section
            onClick={ disabled ? null : toggle }
            className={`elcheckbox ${ className }`}
            style={ style }
            data-disabled={ disabled ? true : false }
            data-checked={ stateChecked }
        >
            <div>{ stateChecked ? check.checked : check.uncheked }</div>
            <p>{ label }</p>
        </section>
    )
}
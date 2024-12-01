import "../css/labels.css"

export default function ScrollArea({ className="", style="", children, scrolly=false, scrollx=false, colorbar="#567a97", colorbg="#182B3A" }) {
    return (
        <main 
            className={`thescrollarea ${ className }`} 
            style={{ 
                ...style, 
                overflowY: scrolly ? "scroll" : "", 
                overflowX: scrollx ? "scroll" : "" 
            }}
        >
            <style>
                {`
                    .thescrollarea::-webkit-scrollbar-thumb {
                        background-color: ${colorbar};
                    }
                    .thescrollarea::-webkit-scrollbar-track {
                        background-color: ${colorbg};
                    }
                `}
            </style>
            { children }
        </main>
    )
}
import React from 'react'
import './container.css'
export default function container({children,className,style}) {
    return (
        <div className={`container ${className}`}>
            {children}
        </div>
    )
}

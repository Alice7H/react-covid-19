import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function ButttonMedia({id, link, elementWithHover, elementWithoutHover}) {
    const [element, setElement] = useState('');

    function handleHoverOn(e) {
        setElement(e.target.id);
    }

    function handleHoverOff() {
        setElement('');
    }

    return (
        <Button variant='link' href={link} target="_blank" role="noopener noreferrer">
            <i  id={id} className={ element === id ? elementWithHover : elementWithoutHover } 
                onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} />
        </Button>
    )
}

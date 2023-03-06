import React, { useState } from 'react'
import { colorList } from './colorList'

function ColorForm(props) {
    let [input, setInput] = useState('')

    function colorExists(color) {
        let thisColor = color.toLowerCase()
        if (colorList.includes(thisColor)) {
            return true
        }
        return false
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let checkColor = e.target[0].value
        if (colorExists(checkColor)) {
            props.addColor(input)
            e.target.reset()
        }
        else {
            alert(`The color "${checkColor}" doesn't exist.\n\n Double check spelling and do not include spaces in the color name`)
        }
    }

    return (
        <div className='colorForm'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='enter color' onChange={(e) => setInput(e.target.value)} />
                <button type="submit" className='submit'>submit</button>
            </form>
        </div>
    )
}

export default ColorForm
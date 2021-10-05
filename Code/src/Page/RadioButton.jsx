import React from 'react'
import '../CSS/RadioButton.css'
function RadioButton (props)
{
    return (
        <div>
            {props.description}
            <br />
            <input type="radio" value={props.value_1} name="task_type"/> {props.value_1}
            <input type="radio" value={props.value_2} name="task_type"/> {props.value_2}
        </div>
        )
}

export default RadioButton
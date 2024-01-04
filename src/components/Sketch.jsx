/* eslint-disable react/prop-types */

import './Sketch.css'
const Sketch = ({stl, optionSelected, i, id} )=>{
    return <img
            key={i}
            src={`./ffoptionsLogo/elements/sketchElements/${optionSelected}/${i}.png`}
            className={`${stl} + ' ' + ${optionSelected} +' '+ ${id}`}
            alt={`Image ${i}`}
    />
}
export default Sketch;
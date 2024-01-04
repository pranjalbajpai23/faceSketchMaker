/* eslint-disable react/prop-types */
import { useDrag } from 'react-dnd';


const FFoption = ({ stl, optionSelected, i, id, })=>{

    const [{isDraging},drag]=useDrag(()=>({
        type: "image",
        item:{
            id:id,
            i:i,
            category:optionSelected,
        },
        collect:(monitor)=>({
            isDraging:!!monitor.isDragging(),
            item: !!monitor.getItem,
        })
    }),[optionSelected]);

    
    return <img 
            key={i}
            ref={drag}
            src={`./ffoptionsLogo/elements/sketchElements/${optionSelected}/${i}.png`}
            className={stl}
            style={{ border: isDraging ? "2px solid white":"0px"}}
            alt={`Image ${i}`} 
            />
}
export default FFoption;
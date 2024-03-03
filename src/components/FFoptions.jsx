/* eslint-disable react/prop-types */
import styles from './FFoptions.module.css';
import FFoption from './FFoption';
import { useState } from 'react';

const FFoptions=()=>{

    //capatalize head, lips, chnage name in folder also 

    const [optionSelected, setOption] = useState("head");
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const options=[
        {
            name:"head",
            src:'headLogo.png'
        },
        {
            name: "hair",
            src: 'hairLogo.png'
        },
        {
            name: "eyes",
            src: 'eyeLogo.png'
        },

        {
            name: "eyebrows",
            src: 'eyebrowLogo.png'
        },
        {
            name: "nose",
            src: 'noseLogo.png'
        },
        {
            name: "lips",
            src: 'lipsLogo.png'
        },
        {
            name: "mustache",
            src: 'mustacheLogo.png'
        }
    ]
    const optionsHandler=(selected)=>{
        setOption(selected);
    }
    return<>
        <div className={`${styles.categories} categories`}>
            <div className={`${styles.optionContainer} optionContainer`}>
                <ul className={`${styles.options} options`} id="options">
                    
                   {
                    options.map(item=>(
                        <li key={item.name} className={`${styles.option} option ${optionSelected == item.name && styles.active}`} id={item.name} onClick={() => optionsHandler(item.name)} onTouchStart={() => optionsHandler(item.name)}>
                            <img src={`./ffoptionsLogo/${item.src}`} alt="" srcSet="" />
                            <a href="#">{item.name}</a>
                        </li>
                    ))
                   }
                </ul>
            </div>
            <div className={`${styles.content} content`}>
                {

                    numbers.map((i) => {
                        return (
                            <FFoption stl={styles.contentImg} key={i} optionSelected={optionSelected} i={i}  id={`${optionSelected+i}`} />    
                        );
                    })
                }
            </div>
        </div>
    </>
}
export default FFoptions;
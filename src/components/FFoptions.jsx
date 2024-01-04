/* eslint-disable react/prop-types */
import styles from './FFoptions.module.css';
import FFoption from './FFoption';
import { useState } from 'react';

const FFoptions=()=>{
    const [optionSelected, setOption] = useState("head");
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const optionsHandler=(selected)=>{
        setOption(selected);
    }
    return<>
        <div className={`${styles.categories} categories`}>
            <div className={`${styles.optionContainer} optionContainer`}>
                <ul className={`${styles.options} options`} id="options">
                    <li className={`${styles.option} option ${optionSelected =="head" && styles.active}`} id="head" onClick={()=>optionsHandler("head")}>
                        <img src="./ffoptionsLogo/headLogo.png" alt="" srcSet=""/>
                            <a href="#">Head</a>
                    </li>
                    <li className={`${styles.option} option ${optionSelected == "hair" && styles.active}`} id="hair" onClick={()=>optionsHandler("hair")}>
                        <img src="./ffoptionsLogo/hairLogo.png" alt="" srcSet=""/>
                            <a href="#">Hair</a>
                    </li>
                    <li className={`${styles.option} option ${optionSelected == "eyes" && styles.active}`} id="eyes" onClick={()=>optionsHandler("eyes")}>
                        <img src="./ffoptionsLogo/eyeLogo.png" alt="" srcSet=""/>
                            <a href="#">Eyes</a>
                    </li>
                    <li className={`${styles.option} option ${optionSelected == "eyebrows" && styles.active}`} id="eyebrows" onClick={()=>optionsHandler("eyebrows")}>
                        <img src="./ffoptionsLogo/eyebrowLogo.png" alt="" srcSet=""/>
                            <a href="#">Eyebrows</a>
                    </li>
                    <li className={`${styles.option} option ${optionSelected == "nose" && styles.active}`} id="nose" onClick={()=>optionsHandler("nose")}>
                        <img src="./ffoptionsLogo/noseLogo.png" alt="" srcSet=""/>
                            <a href="#">Nose</a>
                    </li>
                    <li className={`${styles.option} option ${optionSelected == "lips" && styles.active}`} id="lips" onClick={()=>optionsHandler("lips")}>
                        <img src="./ffoptionsLogo/lipsLogo.png" alt="" srcSet=""/>
                            <a href="#">Lips</a>
                    </li>
                    <li className={`${styles.option} option ${optionSelected == "mustache" && styles.active}`} id="mustache" onClick={()=>optionsHandler("mustache")}>
                        <img src="./ffoptionsLogo/mustacheLogo.png" alt="" srcSet=""/>
                            <a href="#">Mustache</a>
                    </li>
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
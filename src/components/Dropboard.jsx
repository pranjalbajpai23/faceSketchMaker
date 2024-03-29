/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import styles from './Dragdrop.module.css'
import Sketch from './Sketch';
import { useDrop } from 'react-dnd';
import html2canvas from 'html2canvas';

const Dropboard = ({exposedRef}) => {

    const boardRef = useRef(null);
    const downloadScreenshot = () => {
        const element = boardRef.current;

        if (element) {
            html2canvas(element).then((canvas) => {
                const imgSrc = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.href = imgSrc;
                link.download = 'dropboard_screenshot.png';
                link.click();
            });
        }
    };
    if (exposedRef) {
        exposedRef.current = {
            downloadScreenshot: downloadScreenshot
        };
    }

    const [latestElementsByCategory, setLatestElementsByCategory] = useState({});

    // eslint-disable-next-line no-unused-vars
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
        drop: (item) => {
            addFeature(item);
        },
    }));

    const addFeature = (item) => {
        setLatestElementsByCategory((prevElements) => ({
            ...prevElements,
            [item.category]: item,
        }));
    };

    return (
        < >
            <div ref={boardRef} style={{width:"70%"}}>
                <div className={`${styles.board}`} ref={drop}>
                    {Object.values(latestElementsByCategory).map((feature) => (
                        <Sketch
                            stl={styles.boardImage}
                            key={feature.id}
                            optionSelected={feature.category}
                            i={feature.i}
                            id={feature.id}
                        />
                    ))}
                </div>
            </div>

        </>
    );
};

export default Dropboard;

import { useEffect, useState } from "react";
import classes from "./selectedInput.module.css";

const SelectedInput = ({ defaultValue, options, type, id, customStyle }) => {
    const [selBox, setSelBox] = useState(false)
    const [inputValue, setInputValue] = useState(defaultValue)

    // const down= <i class="fas fa-chevron-down"></i>
    // const up= <i class="fas fa-chevron-up"></i>
    // const [icon, setIcon]=useState(down)

    window.addEventListener('click', (e) => {
        if (selBox && !document.getElementById(id).contains(e.target)) {
            setSelBox(false)
        }
    });


    let element;
    switch (type) {
        case "modal":
            element = (<div className={selBox ? classes.selBoxContainer + " " + classes.modalPosition : "d-none"}>
                {options ? options.map((op) => (
                    <li key={op} onClick={() => changeInputValue(op)}>{op}</li>
                )) : null}
            </div>);
            break;
        default:
            element = (<div className={selBox ? classes.selBoxContainer + " "+ classes.selBoxPosition : "d-none"}>
                {options ? options.map((op) => (
                    <li key={op} onClick={() => changeInputValue(op)}>{op}</li>
                )) : null}
            </div>)
            break;

    }

    const changeInputValue = (op) => {
        setInputValue(op)
        setSelBox(false)
    }

    console.log(selBox)
    return (
        <div style={customStyle && customStyle} id={id} className={classes.selectedInput} onClick={() => setSelBox(true)}>
            <div className={!selBox ? classes.inputContainer : classes.inputContainer + " " + classes.rotate}>
                <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="select from" />
                <span><i className='fas fa-chevron-down'></i></span>
            </div>
            {element}  
        </div>

    );
}

export default SelectedInput;
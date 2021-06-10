const CheckBox = (props) => {


    return (
        <div className="customCheckBox">
            <input onClick={props.onChecked} value={props.value} type={props.type} /> {props.label ? <label className="text-capitalize">{props.label}</label> : ""}
        </div>
    );
}

export default CheckBox;
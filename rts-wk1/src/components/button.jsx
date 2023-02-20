function Button({handleClick, text, color}){
	return (
		<button type="button" className="btn" onClick={handleClick} style={{color:`${color}`, fontWeight: 'bold'}}>{text}</button>
	)
}
/*
function Button(props){
	return (
		<button type="button" className="btn" onClick={props.handleClick}>{props.text}</button>
	)
}
*/

export default Button;
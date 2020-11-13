import React from "react";
import "./style.scss";


const Input = (props) => {
	const [inputValue, setInputValue] = React.useState('');
	const handleInput = (event) => {
		setInputValue({ inputValue: event.target.value });
	};

	const { placeholder } = props;

	return (
		<input
			type="text"
			className="input"
			onChange={handleInput}
			value={inputValue}
			placeholder={placeholder}
		/>
	);
}
export default Input;

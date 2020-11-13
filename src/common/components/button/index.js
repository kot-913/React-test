import React from "react";
import "./style.scss";

function Button(props) {
	const handleClick = () => {
		const { onHeaderClick } = props;
		onHeaderClick();
		// this.props.onHomeClick();// 2 variant
	};


	return (
		<button className="btn" onClick={handleClick}>
			{props.label}
		</button>
	);

}

export default Button;

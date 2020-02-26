import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import style from './Footer.module.scss';
import { addInput } from "../actions";

const Footer = ({ crypto, addInput }) => {
	const { id } = crypto[0] || "";
	const [value, setValue] = useState(id);
	const [disabled, setDisabled] = useState(false);
	useEffect(() => {
		if (crypto.length > 0) {
			setValue(id);
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [id, crypto.length]);
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (<div className={style.wrap}>
		<select disabled={disabled} onChange={handleChange} value={value}>
			{crypto.map((item) => (<option key={item.id} value={item.id}>{item.name}</option>))}
		</select>
		<button disabled={disabled} onClick={ () => addInput(value)} className={style.button}>
			<ControlPointIcon />
		</button>
	</div>);
};
const mapStateToProps = (state) => (
	{
		crypto: state.cryptoAll,
	}
);
const mapDispatchToProps = (dispatch) => bindActionCreators({
	addInput,
}, dispatch);

export default connect(
	mapStateToProps, mapDispatchToProps,
)(Footer);

Footer.propTypes = {
	crypto: PropTypes.array.isRequired,
};

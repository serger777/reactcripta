import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import CryptoListItem from '../CryptoListItem';
import { changeInput, deletedInput, lockedInput } from "../actions";
import style from './CryptoList.module.scss';

const CryptoList = ({
	crypto, changeInput, deletedInput, lockedInput,
}) => {
	console.log(JSON.stringify(crypto));
	return (<div className={style.wrap}>
		{
			crypto.map((item) => (
				<div className={style.item} key={item.id}>
					<CryptoListItem
						crypto={item}
						changeInput={changeInput}
						deletedInput={() => deletedInput(item.id)}
						lockedInput={() => lockedInput(item.id)}
					/>
				</div>
			))
		}
	</div>);
};


const mapStateToProps = (state) => (
	{
		crypto: state.crypto,
	}
);
const mapDispatchToProps = (dispatch) => bindActionCreators({
	changeInput,
	deletedInput,
	lockedInput,
}, dispatch);

export default connect(
	mapStateToProps, mapDispatchToProps,
)(CryptoList);


CryptoList.propTypes = {
	crypto: PropTypes.array.isRequired,
};

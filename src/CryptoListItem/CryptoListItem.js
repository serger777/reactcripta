import React, { useEffect, useState } from 'react';
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import { withStyles } from '@material-ui/core/styles';
import style from './CryptoListItem.module.scss';


const color = [
	"#2196F3",
	"#6610f2",
	"#7E57C2",
	"#e83e8c",
	"#EF5350",
	"#FFCA28",
	"#2196F3",
	"#66BB6A",
	"#20c997",
	"#00BCD4",
	"#3f669f",
];
const Header = ({ crypto, deletedInput, lockedInput }) => {
	const {
		name, id, value, locked,
	} = crypto;
	const NameIcon = withStyles({
		root: {
			color: `${color[`${id}`]}!important`,
			height: 20,
		},
	})(FiberManualRecordTwoToneIcon);

	return (<div className={style.header}>
		<div className={style.wrap_name}>
			<NameIcon />
			<span onClick={lockedInput} className={style.name}>{name}</span>
		</div>
		<div className={style.wrap_value}>
			<span className={style.value}>{value}%</span>
			<button onClick={lockedInput} className={style.button}>
				{
					locked ? <LockTwoToneIcon /> : <LockOpenTwoToneIcon />
				}
			</button>
		</div>
		<button
			disabled={locked}
			onClick={deletedInput}
			className={style.button}>
			<HighlightOffTwoToneIcon />
		</button>
	</div>
	);
};

const CryptoSlider = withStyles({
	root: {
		height: 8,
	},
	thumb: {
		height: '18px!important',
		width: '18px!important',
		backgroundColor: '#fff',
		border: '2px solid currentColor',
		marginTop: '-6px!important',
		marginLeft: 0,
		'&:focus,&:hover,&$active': {
			boxShadow: 'inherit',
		},
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)',
	},
	track: {
		height: 8,
		borderRadius: 4,
	},
	rail: {
		height: 8,
		borderRadius: 4,
		opacity: 1,
	},
})(Slider);
const CryptoListItem = ({
	crypto, changeInput, deletedInput, lockedInput,
}) => {
	const { id, value, locked } = crypto;
	const [currentValue, setValue] = useState(value);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		changeInput(id, currentValue);
	}, [currentValue]);
	return (
		<>
			<Header crypto={crypto} deletedInput={deletedInput} lockedInput={lockedInput} />
			<CryptoSlider
				style={{ color: `${color[id]}`, opacity: `${locked ? "0.5" : "1"}` }}
				onChange={handleChange}
				disabled={locked}
				value={currentValue}
				step={0.1}
				min={0} max={100}
				valueLabelDisplay="off"
			/>
		</>
	);
};

export default CryptoListItem;

CryptoListItem.propTypes = {
	crypto: PropTypes.object.isRequired,
};

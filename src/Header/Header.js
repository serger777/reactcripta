import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import style from './Header.module.scss';

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

const Header = ({ crypto }) => (
	<div className={style.header}>
		{
			crypto.map((item, idx) => (
				<span key={item.id} className={style.item} style={{ width: `${item.value}%`, backgroundColor: `${color[item.id]}` }}>

				</span>
			))
		}
	</div>
);

const mapStateToProps = (state) => (
	{
		crypto: state.crypto,
	}
);

export default connect(
	mapStateToProps,
)(Header);

Header.propTypes = {
	crypto: PropTypes.array.isRequired,
};

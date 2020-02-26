import React from "react";
import style from './App.module.scss';
import CryptoList from "../CryptoList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const App = () => (
	<div className={style.wrap}>
		<h2>Portfolio constructor</h2>
		<Header />
		<CryptoList />
		<Footer />
	</div>
);

export default App;

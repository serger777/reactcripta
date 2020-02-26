
const crypto = [
	{
		name: "BTC", id: "1", value: 0, locked: false,
	},
	{
		name: "ETH", id: "2", value: 0, locked: false,
	},
	{
		name: "EOS", id: "3", value: 0, locked: false,
	},
	{
		name: "XRP", id: "4", value: 0, locked: false,
	},
	{
		name: "BNB", id: "5", value: 0, locked: false,
	},
	{
		name: "LTC", id: "6", value: 0, locked: false,
	},
	{
		name: "XMR", id: "7", value: 0, locked: false,
	},
	{
		name: "DASH", id: "8", value: 0, locked: false,
	},
	{
		name: "BCHABC", id: "10", value: 0, locked: false,
	},

];


const initialState = {
	crypto: crypto.filter(({ id }) => id <= 5),
	cryptoAll: crypto.filter(({ id }) => id > 5),
};
const updateItems = (items, item, idx) => {
	if (idx === -1) {
		return [
			...items,
			item,
		];
	}

	return [
		...items.slice(0, idx),
		item,
		...items.slice(idx + 1),
	];
};
const updateItem = (cryptoItem, value) => {
	const { id, name, locked } = cryptoItem;
	return {
		name,
		id,
		value,
		locked,
	};
};
const updateLocked = (cryptoItem) => ({
	...cryptoItem,
	locked: !cryptoItem.locked,
});
const updateValue = (crypto, cryptoId, value) => {
	const itemIndex = crypto.findIndex(({ id }) => id === cryptoId);
	const item = crypto[itemIndex];
	const newItem = updateItem(item, value);
	return updateItems(crypto, newItem, itemIndex);
};
const deletedInput = (state, cryptoId) => {
	const idx = state.findIndex(({ id }) => id === cryptoId);
	return [
		...state.slice(0, idx),
		...state.slice(idx + 1),
	];
};
const lockedInput = (crypto, cryptoId) => {
	const itemIndex = crypto.findIndex(({ id }) => id === cryptoId);
	const item = crypto[itemIndex];
	const newItem = updateLocked(item);
	return updateItems(crypto, newItem, itemIndex);
};
const addInput = (state, cryptoId) => {
	const { crypto, cryptoAll } = state;
	const item = cryptoAll.filter(({ id }) => id === cryptoId);
	return [
		...crypto,
		item[0],
	];
};
const addInputFooter = (state, cryptoId) => {
	const { crypto, cryptoAll } = state;
	const item = crypto.filter(({ id }) => id === cryptoId);
	return [
		...cryptoAll,
		item[0],
	];
};
const reducers = (state = initialState, action) => {
	switch (action.type) {
	case 'CHANGE_INPUT':
		return {
			...state,
			crypto: updateValue(state.crypto, action.payload, action.value),
		};
	case 'DELETED_INPUT':
		return {
			crypto: deletedInput(state.crypto, action.payload),
			cryptoAll: addInputFooter(state, action.payload),
		};
	case 'LOCKED_INPUT':
		return {
			...state,
			crypto: lockedInput(state.crypto, action.payload),
		};
	case 'ADD_INPUT':
		return {
			cryptoAll: deletedInput(state.cryptoAll, action.payload),
			crypto: addInput(state, action.payload),
		};
	default:
		return state;
	}
};


export default reducers;

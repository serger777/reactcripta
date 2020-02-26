const changeInput = (id, value) => ({
	type: 'CHANGE_INPUT',
	payload: id,
	value,
});
const deletedInput = (id) => ({
	type: 'DELETED_INPUT',
	payload: id,
});
const lockedInput = (id) => ({
	type: 'LOCKED_INPUT',
	payload: id,
});
const addInput = (id) => ({
	type: 'ADD_INPUT',
	payload: id,
});

export {
	changeInput,
	deletedInput,
	lockedInput,
	addInput,
};

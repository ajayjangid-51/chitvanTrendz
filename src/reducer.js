export const initialState = {
	basket: [], // yaha basket mtlb apni datalayer hi aur ya mtlb apni store hi.
	currentuser: null,
};

//
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, index) => Number(index.pricing) + amount, 0);

const reducer = (state, action) => {
	console.log("hello i am reducer you called me");
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketitem) => basketitem.id === action.id
			);
			let newBasket = [...state.basket];
			if (index > 0) {
				newBasket.splice(index, 1);
			} else
				console.log(
					"can't remove this item bcoz it is not present in the datalayer-store"
				);
			return {
				...state,
				// basket: state.basket.filter((item) => item.id !== action.id),
				basket: newBasket,
			};
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};
export default reducer;

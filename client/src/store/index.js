import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
	state: {
		products: [],
		cart: []
	},

	mutations: {
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products;
		},
		SET_CART: (state, product) => {
			let isProductExists = false;
			if (state.cart.length) {
				state.cart.map(function (item) {
					if (item.article === product.article) {
						isProductExists = true;
						item.quantity++
					}
				})
				if (!isProductExists) {
					state.cart.push(product)
				}
			} else {
				state.cart.push(product)
			}
		},
	},

	actions: {
		async GET_PRODUCTS_FROM_API({ commit }) {
			try {
				const products = await axios('http://localhost:3000/products', { method: 'GET' });
				commit('SET_PRODUCTS_TO_STATE', products.data);
				return products;
			} catch (error) {
				console.log(error);
				return error;
			}
		},
		ADD_TO_CART({commit}, product){
			commit('SET_CART', product)
		}
	},

	getters: {
		PRODUCTS(state) {
			return state.products;
		},
		CART(state){
			return state.cart
		}
	},
	modules: {}
});

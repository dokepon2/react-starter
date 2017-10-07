import { ADD_USER } from './'

export const AddUser = (user) => {
	return {
		type: ADD_USER,
		payload: user
	}
}
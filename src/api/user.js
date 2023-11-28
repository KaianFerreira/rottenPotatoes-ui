import api from '../libs/api'

export const signin = async (userName, password) => {
	const { data } = await api.post('/user/signin', {
		userName, password
	})

	return data
}


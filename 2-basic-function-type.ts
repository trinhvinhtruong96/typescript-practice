// Add type to the functions below
const twoNumberSum = (a, b) => {
	return a + b;
};

const twoNumberSumV1 = (params) => {
	return params.first + params.second;
};

const GetUserInfo = async () => {
	const data = await new Promise((resolve) => {
		const user = {
			name: 'code mely',
			age: 22,
			career: 'developer'
		}
		resolve(user)
	});

	return data;
};
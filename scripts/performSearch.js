import setMessage from "./setMessage";
import setSearchResult from "./setSearchResult";

const API_URL_STATIC_PART = 'https://api.github.com/search/users?q='

export const performSearch = (githubUser, isUserSelected) => {
	setMessage('')
	if (!githubUser || !githubUser.trim()) {
		setMessage('Please fill out the search field, It can`t be empty👆🏻😐 ')
		// setMessage()
		return;
	}
	const githubUserType = isUserSelected ? '+type:user' : '+type:org';
	// console.log(`${githubUser}  +  ${githubUserType}`);

	fetch(`${API_URL_STATIC_PART} ${githubUser}${githubUserType}`)
		.then((result) => result.json())
		.then((response) => setSearchResult(response.items));
};

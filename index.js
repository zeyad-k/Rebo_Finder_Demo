// console.log(2222);



const API_URL_STATIC_PART = 'https://api.github.com/search/users?q='

const setSearchResult = (response) => {
	console.log('Show Result');
};

const performSearch = (githubUser, isUserSelected) => {

	const githubUserType = isUserSelected ? '+type:user' : '+type:org';
	// console.log(`${githubUser}  +  ${githubUserType}`);

	fetch(`${API_URL_STATIC_PART} ${githubUser}${githubUserType}`)
		.then((result) => result.json)
		.then((response) => setSearchResult(response));

};

const submitButton = document.querySelector(".button");
const githubUserElement = document.querySelector(".input");
const githubUserTypeElement = document.querySelector('input[value="users"]');

submitButton.addEventListener("click", (event) => {
	event.preventDefault();
	performSearch(githubUserElement.value, githubUserTypeElement.checked);
});



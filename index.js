// console.log(2222);



const API_URL_STATIC_PART = 'https://api.github.com/search/users?q='
const cardsElement = document.querySelector('.cards');
const setSearchResult = (data) => {
	let result = ``;
	data.map((item) => {
		result += `<article class="card">
	<a target="_blank" href="${item.html_url}">
	<img src="${item.avatar_url}" loading="lazy" class="img">
	</a>
	<h2 class="name">${item.login}</h2>

	</article>`
	}
	);
	cardsElement.innerHTML = result;
};

const performSearch = (githubUser, isUserSelected) => {

	const githubUserType = isUserSelected ? '+type:user' : '+type:org';
	// console.log(`${githubUser}  +  ${githubUserType}`);

	fetch(`${API_URL_STATIC_PART} ${githubUser}${githubUserType}`)
		.then((result) => result.json())
		.then((response) => setSearchResult(response.items));

};

const submitButton = document.querySelector(".button");
const githubUserElement = document.querySelector(".input");
const githubUserTypeElement = document.querySelector('input[value="users"]');

submitButton.addEventListener("click", (event) => {
	event.preventDefault();
	performSearch(githubUserElement.value, githubUserTypeElement.checked);
});



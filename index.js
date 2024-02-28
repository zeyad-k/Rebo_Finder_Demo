// console.log(2222);

import { cardsElement, githubUserElement, githubUserTypeElement, submitButton } from "./scripts/elements.js";
import { performSearch } from "./scripts/performSearch.js";




submitButton.addEventListener("click", (event) => {
	event.preventDefault();
	performSearch(githubUserElement.value, githubUserTypeElement.checked);
});



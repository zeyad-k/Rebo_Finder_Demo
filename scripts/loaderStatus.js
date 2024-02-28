import { loaderElement } from "./elements"
import setSearchResult from "./setSearchResult";

const startLoader = () => {
	loaderElement.classList.remove('hidden');
	setSearchResult(null);
}

export const endLoader = () => {
	loaderElement.classList.add('hidden')
}

export default startLoader;
import { messageElement } from "./elements";

// console.log(messageElement);
const setMessage = (message) => {
	messageElement.innerHTML = message;
}

export default setMessage;
import renderToDOM from './render-to-dom.js';
import MakeMessages from './make-message.js';

const waitTime = new Promise((todoOk, todoMal) => {
	setTimeout(()=> {
		todoOk('Han pasado 3 segundos');
	},3000)
})

module.exports = {
	firstMessage: 'yass',
	delayedMessage: async () => {
		const message = await waitTime;
		renderToDOM(MakeMessages(message));
	},
}
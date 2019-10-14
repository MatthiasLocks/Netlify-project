import { devineLog } from './js/utility/helpers.js';

const init = () => {
  devineLog(`Hello world`);
  document.querySelector(`body`).addEventListener(`click`, handleClickBody);
};

const handleClickBody = event => {
	devineLog(event);
  devineLog(event.clientX);
  devineLog(event.clientX);
};

init();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { menubar } = require('../..');

const mb = menubar();

mb.on('ready', () => {
	console.log('Menubar app is ready.');
});

mb.on('after-create-window', () => {
	//let element = document.getElementById('debug');
	//const windowBounds = mb.window.getBounds();
	//element.innerText = windowBounds.toString();
	//void mb.window.loadURL('https://respektive1.mocoapp.com');
});

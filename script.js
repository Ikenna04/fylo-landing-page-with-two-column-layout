const info = document.getElementById('info');
const infos = document.getElementById('info1');
const mail = document.getElementById('mail');
const mails = document.getElementById('mail1');

let a, b, c, d, e;

const showInfo = () => {
	a = mail.value;
	b = Array.from(a);
	c = b.length;
	d = b.includes('@');
	e = b.includes('.');
	c === 0
		? ((info.innerText = 'Enter an email address'),
		  (infos.innerText = 'Enter an email address'))
		: d && e
		? ((info.innerText = 'Check your email please'),
		  (infos.innerText = 'Check your email please'))
		: ((info.innerText = 'Please enter a valid email address'),
		  (infos.innerText = 'Please enter a valid email address'));
};

const showInfo1 = () => {
	a = mails.value;
	b = Array.from(a);
	c = b.length;
	d = b.includes('@');
	e = b.includes('.');
	c === 0
		? ((info.innerText = 'Enter an email address'),
		  (infos.innerText = 'Enter an email address'))
		: d && e
		? ((info.innerText = 'Check your email please'),
		  (infos.innerText = 'Check your email please'))
		: ((info.innerText = 'Please enter a valid email address'),
		  (infos.innerText = 'Please enter a valid email address'));
};

const hideInfo = () => {
	info.innerText = ' ';
	infos.innerText = ' ';
};

const shareInput = () => {
	mails.value = mail.value;
};

const shareInput1 = () => {
	mail.value = mails.value;
};

const mail = document.getElementById('mail'),
	mails = document.getElementById('mail1');
btn = document.querySelectorAll('.btn');

let pattern;

mail.addEventListener('click', () => {
	mail.style.border = '1px solid var(--very-dark-blue) ';
	mail.nextElementSibling.style.display = 'none';
});

const submit = () => {
	pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	mail.value.match(pattern) || mails.value.match(pattern)
		? ((mail.nextElementSibling.innerHTML = 'Check your email please'),
		  (mails.nextElementSibling.innerHTML = 'Check your mail'),
		  (mail.nextElementSibling.style.display = 'flex'),
		  (mails.nextElementSibling.style.display = 'flex'),
		  (mail.nextElementSibling.style.color = 'var(--very-dark-blue)'),
		  (mails.nextElementSibling.style.color = 'var(--very-dark-blue)'),
		  (mail.style.border = '1px solid var(--very-dark-blue) '),
		  (mails.style.border = '1px solid var(--very-dark-blue) '))
		: !mail.value || !mails.value
		? ((mail.nextElementSibling.innerHTML = `Can't be blank`),
		  (mails.nextElementSibling.innerHTML = `Can't be blank`),
		  (mail.nextElementSibling.style.display = 'flex'),
		  (mails.nextElementSibling.style.display = 'flex'),
		  (mail.nextElementSibling.style.color = 'var(--red)'),
		  (mails.nextElementSibling.style.color = 'var(--red)'),
		  (mail.style.border = '2px solid var(--red)'),
		  (mails.style.border = '2px solid var(--red)'))
		: !mail.value.match(pattern) || !mails.value.match(pattern)
		? ((mail.nextElementSibling.innerHTML =
				'Please enter a valid email address'),
		  (mails.nextElementSibling.innerHTML =
				'Please enter a valid email address'),
		  (mail.nextElementSibling.style.display = 'flex'),
		  (mails.nextElementSibling.style.display = 'flex'),
		  (mail.nextElementSibling.style.color = 'var(--red)'),
		  (mails.nextElementSibling.style.color = 'var(--red)'),
		  (mail.style.border = '1px solid var(--red)'),
		  (mails.style.border = '1px solid var(--red)'))
		: ((mail.nextElementSibling.innerHTML = 'Error'),
		  (mails.nextElementSibling.innerHTML = 'Error'),
		  (mail.nextElementSibling.style.display = 'flex'),
		  (mails.nextElementSibling.style.display = 'flex'),
		  (mail.nextElementSibling.style.color = 'var(--red)'),
		  (mails.nextElementSibling.style.color = 'var(--red)'),
		  (mail.style.border = '1px solid var(--red)'),
		  (mails.style.border = '1px solid var(--red)'));

	mail.value = '';
	mails.value = '';
};

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', submit);
}

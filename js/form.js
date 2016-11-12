function Form(formClass) {
	this.form = document.getElementsByClassName(formClass)[0];
	this.required = this.form.getElementsByClassName('is-required');
}

Form.prototype.init = function () {
	if (this.form) {
		this.bindEvents();
	} else {
		return;
	}
}

Form.prototype.bindEvents = function () {
	this.form.addEventListener('submit', this.validateForm.bind(this), false);
	for (var i = 0; i < this.required.length; i++) {
		this.required[i].addEventListener('keydown', this.hideError.bind(this), false);
	}
}

Form.prototype.validateForm = function (e) {
	alert
	e.preventDefault();
	if (this.form._gotcha.value !== '') {
		return;
	}

	var emailValid = this.validateEmail(this.form.email.value);
	var messageValid = this.validateText(this.form.message.value);

	if (!emailValid && !messageValid) {
		this.showError(this.form);
		return;
	} else if (!emailValid) {
		this.showError(this.form.email);
		return;
	} else if (!messageValid) {
		this.showError(this.form.message);
		return;
	}

	if (this.form.checkValidity()) {
		var data = new FormData(this.form);
		this.submitForm(data);
	} else {
		this.showError(this.form);
		return;
	}
}

Form.prototype.showError = function (elem) {
	if (elem.classList.contains('is-invalid')) {
		return;
	}

	elem.classList.add('is-invalid');
}

Form.prototype.hideError = function (e) {
	var elem = e.target || e.currentTarget;
	if (this.form.classList.contains('is-invalid')) {
		this.form.classList.remove('is-invalid');
	}
	if (elem.classList.contains('is-invalid')) {
		elem.classList.remove('is-invalid');
	}
}

Form.prototype.validateEmail = function (email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}

Form.prototype.validateText = function (message) {
	var valid = message !== '';
	return valid;
}

Form.prototype.submitForm = function (data) {
	var req = new XMLHttpRequest();
	req.open('POST', 'https://formspree.io/tamarabazko@gmail.com', true);
	req.setRequestHeader('accept', 'application/json');
	req.onreadystatechange = function () {
		if (req.readyState != 4 || req.status != 200) return;
		window.location = 'http://codoyster.com/thank-you';
	};

	req.send(data);
}

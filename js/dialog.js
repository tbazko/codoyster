function Dialog(dialogClass, triggerClass) {
  this.$dialog = $(dialogClass);
  this.$dialogTrigger = $(triggerClass);
  this.$closeButton = this.$dialog.find('.js-dialog-close');
  this.$container = $('.js-main-container')
}

Dialog.prototype.init = function() {
  this.bindEvents();
}

Dialog.prototype.bindEvents = function() {
  this.$dialogTrigger.on('click', this.showDialog.bind(this));
  this.$closeButton.on('click', this.hideDialog.bind(this));
}

Dialog.prototype.showDialog = function(e) {
  e.preventDefault();
  var $trigger = $(e.target) || $(e.currentTarget);
  this.$container.addClass('is-active-dialog');
  this.$dialog.addClass('is-active');
  var $form = this.$dialog.find('.contact-form');
  if($form.length) {
    this.addSubject($form, $trigger);
  }
}

Dialog.prototype.hideDialog = function() {
  this.$container.removeClass('is-active-dialog');
  this.$dialog.removeClass('is-active');
}

Dialog.prototype.addSubject = function($form, $trigger) {
  var title = $trigger.find('.js-subject-title').text();
  $form.find('input[name="your-subject"]').val(title);
}

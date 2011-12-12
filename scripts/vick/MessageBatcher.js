define([

    'vick/Message'

], function (

	Message

) {
// -----------------------------------------------------------------------------


function MessageBatcher() {
	var self = this;
	var i, l;

	self.messages = [];

	for (i = 0, l = arguments.length; i < l; i++) {
		self.messages.push(new Message(arguments[i]));
	}
}


MessageBatcher.prototype.showMessages = function (delay) {
	var self = this;
	var i, l;

	delay = delay || 0;

	for (i = 0, l = self.messages.length; i < l; i++) {
		if (delay) {
			(function (message) {
				window.setTimeout(function () {
					message.show();
				}, delay * i);
			}(self.messages[i]));
		} else {
			self.messages[i].show();
		}
	}
};


return MessageBatcher;


// -----------------------------------------------------------------------------
});

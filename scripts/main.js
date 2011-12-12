require([

    'vick/MessageBatcher'

], function (

	MessageBatcher

) {
// -----------------------------------------------------------------------------


var messageBatcher = new MessageBatcher(
	'Goodbye, New Jersey!',
	'Hello, Montana!',
	'Goodbye, Montana!',
	'Hello, Florida!',
	'Goodbye, Florida!',
	'Hello, Montana!',
	'Goodbye, Montana!',
	'Hello, Philadelphia!',
	'Goodbye, Philadelphia!',
	'Hello, Ardmore!'
);

messageBatcher.showMessages(125);


// -----------------------------------------------------------------------------
});
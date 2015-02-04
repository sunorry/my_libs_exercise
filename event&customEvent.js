var EventUtil = {
	addHandler: function(el, type, handler) {
		if (el.addEventListener) {
			el.addEventListener(type, handler, false);
		} else if (el.attachEvent) {
			el.attachEvent('on' + type, handler);
		} else {
			element["on" + type] = handler;
		}
	},
	getEvent: function(event) {
		return event ? event : window.event;
	},
	getTarget: function(event) {
		return event.target || event.srcElement;
	},
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	removeHandler: function(el, type, handler) {
		if (el.removeEventListener) {
			el.removeEventListener(type, handler, false);
		} else if (el.detachEvent) {
			el.detachEvent('on' + type, handler);
		} else {
			el['on' + type] = null;
		}
	},
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
};


function EventTarget() {
	this.handlers = {};
}

EventTarget.prototype = {
	constructor: EventTarget,
	on: function(type, handler) {
		if (typeof this.handlers[type] == 'undefined') {
			this.handlers[type] = [];
		}
		this.handlers[type].push(handler);
	},
	fire: function(type, data) {
		if (this.handlers[type] instanceof Array) {
			var handlers = this.handlers[type];
			for (var i = 0, len = handlers.length; i < len; i++) {
				handlers[i](data);
			}
		}
	},
	off: function(type, handler) {
		if (this.handlers[type] instanceof Array) {
			var handlers = this.handlers[type];
			for (var i = 0, len = handlers.length; i < len; i++) {
				if (handlers[i] === handler) {
					break;
				}
			}
			handlers.splice(i, 1);
		}
	}
};

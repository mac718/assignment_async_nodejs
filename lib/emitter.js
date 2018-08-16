var Emitter = function() {
  this.listeners = {};
  
  
  this.on = function(event, listener) {
    if (this.listeners.event) {
      this.listeners.event.push(listener);
    } else {
      this.listeners.event = [listener];
    };
  }

  this.emit = function(event, ...args) {
    if (this.listeners.event.length == 0) {
      return false;
    } else {
      debugger;
      this.listeners.event.forEach(listener => { listener(...args) });
      return true;
    };
  }

  this.removeListener = function(event, listener) {
    this.listener.event = listeners.event.filter( (elem) => { return elem != listener } );
  }

  this.removeAllListeners = function(event) {
    this.listener.event = [];
  }

}

module.exports = Emitter;
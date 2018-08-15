class Emitter {
  constructor() {
    let listeners = {};
  }
  
  on(event, listener) {
    if (this.listeners[event]) {
      this.listeners[event].push(listener);
    } else {
      this.listeners[event] = [listener];
    };
  }

  emit(event, ...args) {
    if (this.listeners.length == undefined) {
      return false;
    } else {
      listeners[event].forEach(listener => { listener(...args) });
      return true;
    };
  }

  removeListener(event, listener) {
    this.listener.event = listeners.event.filter( (elem) => { return elem != listener } );
  }

  removeAllListeners(event) {
    this.listener.event = [];
  }

}

module.exports = Emitter;
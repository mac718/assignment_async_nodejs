class Emitter {
  constructor() {
    let listeners = {};
  }
  
  on(event, listener) {
    if (this[event]) {
      this[event].push(listener);
    } else {
      this[event] = [listener];
    };
  }

  emit(event, ...args) {
    if (this[event].length == 0) {
      return false;
    } else {
      debugger;
      this[event].forEach(listener => { listener(...args) });
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
'use strict';

class ActionsManager {
  constructor(client) {
    this.client = client;
  }

  register(Action) {
    this[Action.name.replace(/Action$/, '')] = new Action(this.client);
  }
}

module.exports = ActionsManager;

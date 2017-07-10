import Ember from 'ember';
import embed from 'npm:embed';

function onMessage(msg) {
  alert(msg);
}

export default Ember.Component.extend({
  didInsertElement() {
    embed(
      document.getElementById('app-wrapper'),
      { arbitrary: 'data' },
      onMessage 
    );
  }
});

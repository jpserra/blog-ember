import Ember from 'ember';

export default Ember.Controller.extend({
    isFormShowing: false,
  actions:{
    sendMessage: function(){
      this.set("isFormShowing", true);

    },
    submitContactForm: function(){
      alert("form submitted");
    }
    }
});

import Ember from 'ember';

export default Ember.ArrayController.extend({
  isFormShowing:false,
  actions:{
    savePost: function(){
      var post = this.store.createRecord("post",{
      title: this.get("postTitle"),
      content: this.get("postContent")
    });
      this.set("isFormShowing", false);

       this.set('postTitle', "");
        this.set('postContent', "");
       post.save();
    },
    showForm: function(){
      this.set("isFormShowing", true);
    }
  }
});

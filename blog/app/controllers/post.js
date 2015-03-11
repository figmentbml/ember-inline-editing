import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editPost: function(post){
      this.set('isEditing', true);
    },

    savePost: function(post) {
      var controller = this;
      var title = post.get('title'),
          body = post.get('body');
      if (title && body) {
        post.save();
        controller.set('isEditing', false);
      }
    }
  }
});

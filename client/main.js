Posts = new Meteor.Collection("posts");
AboutMe = new Meteor.Collection("aboutme");

if (Meteor.isClient) {

  Template.stream.helpers({
    posts : function () {
      console.log("posts");
      return Posts.find({}, {sort: {published: -1}});
    } 
  })
  Template.about.helpers({
    about : function () {
      console.log("about");
      return AboutMe.find({}, {sort: {published: -1}});
    }
  })

  Template.editor.events({
    "click #submit-post": function() {
     if (document.getElementById("editor-area").value !=""){
      var published_date = new Date();
      Posts.insert({
        text: document.getElementById("editor-area").value,
        published: published_date.toLocaleString()
      });
  document.getElementById("editor-area").value = "";      
    }    
  }
  });

  Template.post.events({
    "click .remove": function () {
      Posts.remove(this._id);
    }
  });

}


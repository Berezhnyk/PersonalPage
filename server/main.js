Posts = new Meteor.Collection("posts");
AboutMe = new Meteor.Collection("aboutme");

if (Meteor.isServer){
  Meteor.startup(function () { 
    AboutMe.remove({});
    if (AboutMe.find().count() === 0) {
      var birthday = new Date("9/10/1993");
      var today = new Date();
      var years = today.getFullYear() - birthday.getFullYear();

// Reset birthday to the current year.
 
      birthday.setFullYear(today.getFullYear());

// If the user's birthday has not occurred yet this year, subtract 1.
      if (today < birthday)
      {
        years--;
      }
      AboutMe.insert({
        myname: "Іван",
        subname: "Бережник",
        birthday: (new Date("9/10/1993")).toLocaleDateString(),
        age: years,
        university: "ТНТУ ім. І. Пулюя",
        faculty: "ФІС",
        cathedra: "Комп\'ютерні науки",
      });
    }

    if (Posts.find().count() === 0) {
      var posts = [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iure porro sunt repudiandae amet saepe asperiores commodi repellendus hic accusamus obcaecati ipsum modi magnam nulla magni vitae ea voluptates dignissimos!",
        published: (new Date()).toLocaleString()
      }
      ];
      for (var i = 0; i < posts.length; i++) {
        Posts.insert({
          text: posts[i].text,
          published: posts[i].published,
        });
      }
    }
  });
}
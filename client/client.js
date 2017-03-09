Template.header.events({
  'click #demo': function() {
    console.log("you clicked me!");
  },
});


Template.main.helpers({
  message: "I am a MESSAGE"
});
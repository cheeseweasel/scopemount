Meteor.startup(function () {
  Template.categories_magellan.helpers({
    categories: function(){
      return Categories.find({}, {sort: {order: 1, name: 1}});
    },
    categoryLink: function(){
      return Categories.getUrl(category);
    }
  });
});

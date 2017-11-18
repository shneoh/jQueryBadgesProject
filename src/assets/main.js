$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2550161.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      addBadges(response.courses.completed);
    }
  });

  function addBadges(courses){
  	var $badges = $('#badges');

  	courses.forEach(function(course){
  		var $course = $('<div />',{
  			'class' : 'course'
  		}).appendTo($badges);

  		$('<h3 />', {
  			text: course.title
  		}).appendTo($course);

  		$('<img />', {
  			src: course.badge
  		}).appendTo($course);

  		$('<a />', {
  			href: course.url,
  			target: '_blank',
  			class: 'btn btn-primary',
  			text: 'See Course'
  		}).appendTo($course);
  	})
  }
});

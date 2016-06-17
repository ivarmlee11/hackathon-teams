$(document).ready(function() {
$('.delete-link').on('click', function(e) {
  e.preventDefault();
  var teamUrl = $(this).attr('href');
  var elementToDelete = $(this);
  console.log(teamUrl);
  $.ajax({
    method: 'DELETE',
    url: teamUrl
  }).done(function(data) {
    // removes the parent element of the element that we're trying to delete
    elementToDelete.parent().remove();
    console.log('Deleted!');
    console.log(data);
  });
  });

$('.put-form').submit(function(e) {
  e.preventDefault();
  var teamUrl = $(this).attr('action');
  console.log('over riding')
  var teamData = $(this).serialize();
  console.log(teamData);
  $.ajax({
    url: teamUrl,
    method: 'PUT',
    data: teamData
  }).done(function(data) {
      console.log(data.msg);
      window.location = '/teams';
  });
 });
});

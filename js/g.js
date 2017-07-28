var $clock = $('.clock'),
    $time = $clock.find('.time'),
    $hoursMinutes = $time.find('.hours-minutes'),
    $seconds = $time.find('.seconds'),
    $period = $time.find('.period'),
    $date = $clock.find('.date'),
    $message = $('.greeting .message');

var currentHour = moment().hour(),
    message = "Good ";

if (currentHour < 12) {
  message += "Morning!";
} else if (currentHour < 17) {
  message += "Afternoon!";
} else {
  message += "Evening!";
}
$message.text(message);

setInterval(function() {
  var date = moment();
  
  $hoursMinutes.text(date.format('h:mm'));
  $seconds.text(date.format('ss'));
  $period.text(date.format('a'));
  $date.text(date.format('dddd, MMMM d'))
  
}, 1000);
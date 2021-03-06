var socket=io();
socket.on('connect',function(){
  console.log('connected to server')
})

socket.on('disconnect',function(){
  console.log('disconnected from server')
})

// socket.on('newEmail',function(email){
//   console.log('New Email',email)
// })
//
// socket.emit('createEmail',
//   {to:"kalpna@123.com",text:"who are you",createdat:123})

socket.on('newMessage',function(message){
//  console.log('Got new message',message)
 var date=moment(message.createdat).format('h:mm a')
  var li=jQuery('<li></li>');
  li.text(`${message.from} ${date}:${message.text}`);
  jQuery('#messages').append(li);
});



//
// socket.emit('createMessage',
//   {from:"kalpna",text:"what's up"},
// function(ack){
//   console.log(ack)
// })



jQuery('#message-form').on('submit',function(e){
  e.preventDefault();
  socket.emit('createMessage',{
    from:"kalpna",text:jQuery('[name=message]').val()
  },function(){
jQuery('[name=message]').val('')
  })
});

jQuery('#send-location').on('click',function(){
  if(!navigator.geolocation)
  {
    return alert('Your browser does not support geolocation')
  }
  jQuery('#send-location').attr('disabled','disabled').text('send location..')
  navigator.geolocation.getCurrentPosition(function(position){
      jQuery('#send-location').removeAttr('disabled').text('send location')
    socket.emit('createNewLocation',{latitude:position.coords.latitude,longitude:position.coords.longitude})
  },function(){
        jQuery('#send-location').removeAttr('disabled').text('send location')
    alert('Unable to fetch the location')

  })
});


socket.on('newLocationMessage',function(message){
   var date=moment(message.createdat).format('h:mm a')
   var li=jQuery('<li></li>');
   var a=jQuery('<a target="_blank">My location</a>')
   li.text(`${message.from} ${date}`)
   a.attr('href',message.url)
  li.append(a);
 jQuery('#messages').append(li);
  //console.log(message)
});

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
  console.log('Got new message',message)
})

socket.emit('createMessage',
  {from:"kalpna",text:"what's up"})

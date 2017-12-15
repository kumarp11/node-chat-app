const path=require('path')
const express=require('express')
const socketIO=require('socket.io')
const http=require('http')

const publicPath=path.join(__dirname,'../public')
const port=process.env.PORT || 3000

var app=express()
var server=http.createServer(app)
var io=socketIO(server)
var {generateMessage}=require('./utils/message.js')

io.on('connection',(socket)=>{
  console.log('New user connected')

  socket.on('disconnect',()=>{
    console.log('disconnected from client')
  })
  // socket.emit('newEmail',{from:"prashant@123.com",text:"how are you",createdat:123})
  // socket.on('createEmail',function(email){
  //   console.log('Create New Email',email)
  // })
//
// socket.emit('newMessage',{from:"prashant",text:"how are you",createdat:123})

socket.emit('newMessage',generateMessage("Admin","Welcome to the chat room"))


socket.broadcast.emit('newMessage',generateMessage(
  "Admin",
  "New user joined the chat room"
))

socket.on('createMessage',function(message){
  console.log('Create New Message',message)
  io.emit('newMessage',generateMessage(
    message.from,
    message.text
  ))

  //
  // socket.broadcast.emit('newMessage',{
  //   from:message.from,
  //   text:message.text,
  //   createdat:new Date().getTime()
  // })

})

})


app.use(express.static(publicPath))

server.listen(port,()=>{
  console.log(`server is up at ${port}`)
})

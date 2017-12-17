const expect =require('expect')
var {generateMessage,generateLocationMessage}=require('./message.js')

describe('generateMessage',()=>{

  it('It should generate the correct message object',()=>{
    var from="Prashant"
    var text="This is Hi"
    var message=generateMessage(from,text)
    expect(message.createdat).toBeA('number')
    expect(message).toInclude({from,text})
  })
})


describe('generateLocationMessage',()=>{

  it('It should generate the location URL',()=>{
    var from="Prashant"
    var lat="28.5481217"
    var long="-81.5336003"
    var message=generateLocationMessage(from,lat,long)
    expect(message.url).toBeA('string')
    expect(message.url).toInclude(`https://www.google.com/maps/?q=${lat},${long}`)
  })
})

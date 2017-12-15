const expect =require('expect')
var {generateMessage}=require('./message.js')

describe('generateMessage',()=>{

  it('It should generate the correct message object',()=>{
    var from="Prashant"
    var text="This is Hi"
    var message=generateMessage(from,text)
    expect(message.createdat).toBeA('number')
    expect(message).toInclude({from,text})
  })
})

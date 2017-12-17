var generateMessage=(from,text)=>{
  return {
    from,
    text,
    createdat:new Date().getTime()
  }
}

var generateLocationMessage=(from,lat,long)=>{
  return {
    from,
    url:`https://www.google.com/maps/?q=${lat},${long}`,
    createdat:new Date().getTime()
  }
}


module.exports={generateMessage,generateLocationMessage};

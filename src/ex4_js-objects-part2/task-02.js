function createObjectWithoutProto () {
   const me = Object.create(null,{});
   return me
}

module.exports = createObjectWithoutProto;
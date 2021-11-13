class MyCliLibrary extends Error{
    constructor(option){
        super(option)
        this.name=this.constructor.name
         this.stack=null
    }

 
}

module.exports=MyCliLibrary
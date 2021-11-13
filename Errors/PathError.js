class PathError extends Error{
    constructor(option){
        super(option)
        this.name=this.constructor.name
         this.stack=null
    }

 
}

module.exports=PathError
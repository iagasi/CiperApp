class ArgumentsErrors extends Error{
    constructor(text1){
        super(text1 )
        this.name=this.constructor.name
         this.stack=null
        
    }

 
}


module.exports=ArgumentsErrors
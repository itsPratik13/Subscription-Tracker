 const errorMiddleware=(err,req,res,next)=>{
     try {
        let error={...err};
        error.message=err.message;
        console.error(error);
        // cast error by mongodb
        if(error.name==="CastError"){
            const message="Resource not found";

            error=new Error(message);
            error.statusCode=404;
        }
        //duplicate key
        if(err.code===1100){
            const message="duplicate field value entered";
            error=new Error(message);
            error.statusCode=400;
        }
        //
        res.status(error.statusCode||500).json({success:false,error:error.message||"Server error"})
     } catch (error) {
        next(error)
        
     }
 }

 export  default errorMiddleware;
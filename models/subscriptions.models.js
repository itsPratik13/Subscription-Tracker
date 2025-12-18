import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    price: {
      type: Number,
      required: [true, "price is required"],
      min: [0, "price must be greater than 0"],
      max: [1000, "price must be lesser than 1000"],
    },
    currency:{
        type:String,
        enum:['USD','INR','GDP','EUR'],
        default:"INR"
    },
    frequency:{
        type:Number,
        enum:["daily","weekly","monthly","yearly"]

    },
    category:{
        type:String,
        enum: [
            "entertainment",
            "education",
            "fitness",
            "productivity",
            "finance",
            "music",
            "gaming",
            "news",
            "software",
            "other"
          ],
          required:true
    },
    paymentMethod:{
         type:String,
         required:true,
         trim:true,
          
    },
    status:{
        type:String,
        enum:['active','canceled','expired'],
        default:'active'
    },
    startDate:{
      type:Date,
      required:true,
      validate:{
        validator:(value)=>value<=new Date(),
        message:"Start date must be in past"
      }
    }, 
    renewalDate:{
      type:Date,
      required:true,
      validate:{
        validator:function (value){
          return value>this.startDate
        },
        message:"renewal date must be after start date"
      }
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true,
      index:true
    }
  },
  { timestamps: true }
);

//auto calculate renewal date if missing

subscriptionSchema.pre("save",function(next){
  if(!this.renewalDate){
    const renewalPeriods={
      daily:1,
      weekly:7,
      monthly:30,
      yearly:365
    }
    this.renewalDate=new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate()+renewalPeriods[this.frequency])
    //auto update if the renewal dtae is passed
     if(this.renewalDate< new Date()){
      this.status="expired";
     }
  }
  next();
})

const Subscriptions=mongoose.model("Subscriptions",subscriptionSchema);

export default Subscriptions;
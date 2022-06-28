export interface IOrder{
    // {_id?:string;
    // orderImtems: IOrderItems[]}


    //     export interface  IOrderItems: [{
    //     id:     {type:String }
    //     title:  {type:String }
    //     size:   {type:String }
    //     quantity:{type:Number}
    //     slug:   {type:String}
    //     image:  {type:String}
    //     price:  {type:Number}
    // }]
    //  shippingAddress:{
    //     firstName:       {type: String}
    //     lastName:        {type: String}
    //     address:         {type: String}
    //     address2:        {type: String}
    //     zip:             {type: String}
    //     city:            {type: String}
    //     country:         {type: String}
    //     phone:           {type: String}
    // }

    //     numberOfItems: {type:Number }
    //     subTotal: {type:Number}
    //     tax:{type:Number }
    //     total:{type:Number }
    //     isPaid: {type: false}
    //     paidAt:{type:String}
    
    orderItems:IOrderItem[]

}

export interface IOrderItem{
    userId: {
        type: String,         
        required: false
    },
    orderItems: [{
        id:{type: String, required: false}, 
        title:{type: String, required: false},
        size:{type: String, required: false},
        quantity:{type: Number, required: false},
        slug:{type: String, required: false},
        image:{type: [], required: false},
        price:{type: Number, required: false},
    }],
    shippingAddress:{
        firstName: {type: String, required: false},
        lastName: {type: String, required: false},
        address: {type: String, required: false},
        address2: {type: String},
        zip: {type: String, required: false},
        city: {type: String, required: false},
        country: {type: String, required: false},
        phone: {type: String, required: false},
    },

    numberOfItems: {type:Number, required:false},
    subTotal: {type:Number, required: false},
    tax:{type:Number, required: false},
    total:{type:Number, required: false},
    isPaid: {type: Boolean, default: false ,required: false},
    paidAt:{type:String},
    paypalId:{type:String, required:false},
    
    }
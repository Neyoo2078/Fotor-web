
import fotorUser from "../model/model.js";

export const userGet= async(req,res)=>{
   
 try {
    const data = await fotorUser.find();
    res.json(data)
 } catch (error) {
    res.json(error)
 }
   
}


export const userPost= async(req,res)=>{
    const{username,email,password} = req.body;
    const body =req.body

    const post = new fotorUser(body);
 try {
   const dat= await fotorUser.findOne({email}) 
   console.log(dat)
   if(dat){
      res.json({status: false})
      return;
   }else{
      await post.save();
      res.json(post)
   }
   
 } catch (error) {
    res.json(error)
 }
   
}

export const accessHome= async(req,res)=>{
    const {email,password} = req.body;
 try {
   const data = await fotorUser.findOne({email: email})
  
   if(!data ){
    res.json({error:"invalid email or password",valid:false})
   }else{
    res.json({error:"valid email or password",valid:true,user:data})
   }
 } catch (error) {
    res.json(error)
 }
   
}

export const userByID = async(req,res)=>{
   const {id} = req.params;

try {
    const data = await fotorUser.findById(id)
    res.json(data)
    
} catch (error) {

    res.status(400).json(error)
}
   
}
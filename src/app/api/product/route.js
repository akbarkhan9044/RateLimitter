import connectDatabase from "@/src/db";
import Product from "@/src/model/Product";

export const GET=async(request)=>{
    try{
        await connectDatabase();
        const response=await Product.find();
        return new Response(JSON.stringify(response),{status:200});
    }catch(error){
        return new Response(JSON.stringify({message:"Error while getting data"}),{status:400})
    }

}
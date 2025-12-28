const API_DOMAIN=process.env.NEXT_PUBLIC_API_DOMAIN



export async function getAllData(){
    try{
        const response=await fetch(`${API_DOMAIN}/product`);
        const res=await response.json();
        return res;
    }catch(error){
        return [];
        console.log(error);
    }
}
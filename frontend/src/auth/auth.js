
const checkAuth=async(url,options)=>{
    try{
   const response=await fetch(url,options)
   const data=await response.json()
   console.log(data)
   if(!data.message){
    return null
   }
   return data
}
catch(err){
    return null
}

}
export {checkAuth}
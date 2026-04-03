import { LoginPage } from "../pages/LoginPage";
import { createApiContext } from "./apiClient";

 export async function loginAndGetToken(page) {
    const loginpage=new LoginPage(page)
    await page.goto("/login");
    await loginpage.login("kalyan@90","kalyan@90");
   const token = await page.evaluate(()=>localStorage.getItem("token"));
     if(!token) throw new Error("Login failed, token not found");
        
     
   return token;
    
 }
 export async function getVerifiedToken(page,request){
    let token= await page.evaluate(()=> localStorage.getItem('token'));
    if( !token) { 
        token= await loginAndGetToken(page);
    return token;
    }
    const api=createApiContext(request,token);
   const response= api.get('/cart');
   if(response.status()===401){
    token=await loginAndGetToken(page,request);
    
   }
   return token;

 }
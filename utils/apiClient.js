export async function createApiContext(request,token){
    return await request.newContext({
        baseURL:'http://localhost:8080/api/',
        extraHTTPHeaders :{
           Authorization :`Bearer ${token}`
        }
    })
} 
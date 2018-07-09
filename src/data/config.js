let baseURL = '';
if(process.env.NODE_ENV === 'production'){
  baseURL = 'https://gradbee.com/dc-server'
}else{
  baseURL = 'http://localhost:3000'
}
export const apiHost = baseURL;

let baseURL = '';
if(process.env.NODE_ENV === 'production'){
  baseURL = 'https://gradbee.com/dc-server'
}else{
  baseURL = 'http://localhost:3001'
}
export const apiHost = baseURL;

let baseURL = '';
if(process.env.NODE_ENV === 'production'){
  baseURL = 'https://siddhartharora.com/api'
}else{
  baseURL = 'http://localhost:3000'
}
export const apiHost = baseURL;

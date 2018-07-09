let baseURL = '';
if(process.env.NODE_ENV === 'production'){
  baseURL = 'http://139.59.59.197:3001/'
}else{
  baseURL = 'http://localhost:3000'
}
export const apiHost = baseURL;

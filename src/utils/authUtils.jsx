import jwtDecode from 'jwt-decode'

export const decodeToken=(token)=>{
    return jwtDecode(token)
}
export const isTokenExpired=(token)=>{
const {exp}=jwtDecode(token)
return Date.now()>=exp*1000
}
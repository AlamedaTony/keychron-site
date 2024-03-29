// users-service.js
import * as usersAPI from './users-api'

export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    // Baby step by returning whatever is sent back by the server
    return getUser();
  }

  export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    // Baby step by returning whatever is sent back by the server
    return getUser();
  }

  export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token');
    if (!token) return null;
    // Obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
      // Token has expired - remove it from localStorage
      localStorage.removeItem('token');
      return null;
    }
    return token;
  }
  
  //spits out valid user object or null value depending on whats in the local storage
  export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  }

  export function logOut() {
    localStorage.removeItem('token');
  }


export function checkToken() {
    //will return a promise that needs to be resolved
   return usersAPI.checkToken().then(dateStr => new Date(dateStr))
   // checkToken returns a string, but let's make it a date object for more flexibility

}
import axios from "axios";

const http = axios.create({
  baseURL: "http://127.0.0.1:7000/graphql",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

const setAuthHeader = function(token) {
  if (!token) {
    return delete http.defaults.headers.common["Authorization"];
  }
  return (http.defaults.headers.common["Authorization"] = `Bearer ${token}`);
};

const removeAuthHeader = function() {};

export { http, setAuthHeader, removeAuthHeader };

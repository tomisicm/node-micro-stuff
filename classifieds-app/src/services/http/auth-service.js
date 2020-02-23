import { http, setAuthHeader } from "./http-service";
import checkToken from "./checkToken";

class AuthService {
  login(query) {
    return http
      .post("", JSON.stringify({ query }))
      .then(response => {
        this.loggingIn(response.data);
      })
      .catch(error => {
        throw error;
      });
  }

  register(query) {
    return http
      .post("", JSON.stringify({ query }))
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    this.setAuthHeaders();
    return Promise.resolve();
  }

  loggingIn({ ["data"]: { userLogin } }) {
    // console.log(data);
    // console.log(userLogin);

    // const { userLogin } = data;
    // localStorage.setItem("user", JSON.stringify(userLogin.user));
    localStorage.setItem("token", userLogin.token);
    // localStorage.setItem("id", userLogin.user.id);
    setAuthHeader(userLogin.token);
  }
}

const authService = new AuthService();

checkToken(authService);

export default authService;

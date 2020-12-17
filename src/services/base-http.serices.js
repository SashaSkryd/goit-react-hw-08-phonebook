




// import axios from "axios";

// export default class BaseHttpService {
//   BASE_URL = "https://some_other_url";

//   _accessToken = null;

//   async get(endpoint = "", options = {}) {
//     Object.assign(options, this._getCommonOptions());
//     return axios
//       .get(`${this.BASE_URL}/${endpoint}`, options)
//       .then((res) => res.data)
//       .catch((error) => this._handleHttpError(error));
//   }

//   async post(endpoint = "", data = {}, options = {}) {
//     Object.assign(options, this._getCommonOptions());
//     return axios
//       .post(`${this.BASE_URL}/${endpoint}`, data, options)
//       .catch((error) => this._handleHttpError(error));
//   }

//   async put(endpoint = "", data = {}, options = {}) {
//     Object.assign(options, this._getCommonOptions());
//     return axios
//       .put(`${this.BASE_URL}/${endpoint}`, data, options)
//       .catch((error) => this._handleHttpError(error));
//   }

//   async delete(endpoint = "", options = {}) {
//     Object.assign(options, this._getCommonOptions());
//     return axios
//       .delete(`${this.BASE_URL}/${endpoint}`, options)
//       .catch((error) => this._handleHttpError(error));
//   }

//   async patch(endpoint = "", data = {}, options = {}) {
//     Object.assign(options, this._getCommonOptions());
//     return axios
//       .patch(`${this.BASE_URL}/${endpoint}`, data, options)
//       .catch((error) => this._handleHttpError(error));
//   }

//   _handleHttpError(error) {
//     const { statusCode } = error.response.data;
//     if (statusCode !== 401) {
//       throw error;
//     } else {
//       return this._handle401();
//     }
//   }

//   _handle401 = () => {
//     this._accessToken = null;
//     this.removeToken();
//   };

//   _getCommonOptions = () => {
//     const { accessToken } = this.loadToken();

//     return {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };
//   };

//   get accessToken() {
//     return this._accessToken ? this._accessToken : this.loadToken();
//   }

//   saveToken = (data) => {
//     const { accessToken } = data;
//     this._accessToken = accessToken;

//     localStorage.setItem("token", accessToken);

//     return {
//       accessToken,
//     };
//   };

//   loadToken() {
//     const accessToken = localStorage.getItem("token");
//     this._accessToken = accessToken;

//     return {
//       accessToken,
//     };
//   }

//   removeToken = () => {
//     localStorage.removeItem("token");
//   };
// }
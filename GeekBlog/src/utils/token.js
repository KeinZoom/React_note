// token operations with local storage
const TOKENKEY = "token-key";

// save token to local storage
const setToken = (value) => {
  localStorage.setItem(TOKENKEY, value);
};

const getToken = () => {
  return localStorage.getItem(TOKENKEY);
};

const removeToken = () => {
  localStorage.removeItem(TOKENKEY);
};

export { setToken, getToken, removeToken };

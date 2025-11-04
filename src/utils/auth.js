// src/utils/auth.js

export const registerUser = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

export const loginUser = (email, password) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser && storedUser.email === email && storedUser.password === password) {
    localStorage.setItem("isAuthenticated", "true");
    return true;
  }
  return false;
};

export const logoutUser = () => {
  localStorage.removeItem("isAuthenticated");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

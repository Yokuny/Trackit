import axios from "axios";
const baseUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";
const Authorization = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
export const register = async (data) => {
  return await axios.post(`${baseUrl}auth/sign-up`, data);
};
export const connect = async (data) => {
  return await axios.post(`${baseUrl}auth/login`, data);
};
export const dailyHabit = async (token) => {
  return await axios.get(`${baseUrl}habits/today`, Authorization(token));
};
export const taskList = async (token) => {
  return await axios.get(`${baseUrl}habits`, Authorization(token));
};
export const postHabit = async (data, token) => {
  return await axios.post(`${baseUrl}habits`, data, Authorization(token));
};
export const deleteHabit = async (id, token) => {
  await axios.delete(`${baseUrl}habits/${id}`, Authorization(token));
};
export const accomplishTask = async (id, token) => {
  return await axios.post(`${baseUrl}habits/${id}/check`, {}, Authorization(token));
};
export const unaccomplishTask = async (id, token) => {
  return await axios.post(`${baseUrl}habits/${id}/uncheck`, {}, Authorization(token));
};

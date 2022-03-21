import axios from 'axios';

export const baseUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API : process.env.REACT_APP_DOMAIN;

export const userApiService = {
  login: async (payload) => {
    const response = await axios.post(`${baseUrl}/login`, payload);
    return response;
  },
  updateAvatar: async (payload) => {
    const response = await axios.post(`${baseUrl}/users/avatar`, payload);
    return response;
  },
  updateUsername: async (payload) => {
    const response = await axios.post(`${baseUrl}/users/username/${payload.wallet}`, {username: payload.username});
    return response;
  },
  getOnlineUsers: async () => {
    const response = await axios.get(`${baseUrl}/users/online`);
    return response;
  }
}

export const roomService = {
  getRoomsByWallet: async (payload) => {
    const response = await axios.get(`${baseUrl}/rooms/${payload}`);
    return response;
  }
}
const storageKey = "s-nft-key"

export const userService = {
  saveUser: (payload) => {
    const user = JSON.stringify(payload);
    localStorage.setItem(storageKey, user);
  },
  getUser: () => {
    const data = localStorage.getItem(storageKey);
    return JSON.parse(data);
  },
  removeUser: () => {
    localStorage.removeItem(storageKey);
  }
}
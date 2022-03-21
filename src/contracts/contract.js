import { ethers } from 'ethers';
import Token from '../abi/mock/Token.sol/Token.json';
import Reception from '../abi/Reception.sol/Reception.json';
import Room from '../abi/Room.sol/Room.json';
import { provider, signer } from './provider';
import { address } from '../constants/address';


export const token = new ethers.Contract(address['token'], Token.abi, provider);
export const tokenWeb3 = new ethers.Contract(address['token'], Token.abi, signer);

export const reception = new ethers.Contract(address['reception'], Reception.abi, provider);
export const receptionWeb3 = new ethers.Contract(address['reception'], Reception.abi, signer);

export const gameRoom = (roomAddr) => {
  return new ethers.Contract(roomAddr, Room.abi, provider);
}

export const gameRoomWeb3 = (roomAddr) => {
  return new ethers.Contract(roomAddr, Room.abi, signer);
}
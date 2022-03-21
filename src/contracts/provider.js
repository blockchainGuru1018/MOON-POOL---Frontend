import { ethers } from 'ethers';
import { network } from '../constants/network';

export const provider = new ethers.providers.JsonRpcProvider(network.rpcUrls[0]);

const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = web3Provider.getSigner();

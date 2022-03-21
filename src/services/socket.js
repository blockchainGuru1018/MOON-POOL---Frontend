import { io } from "socket.io-client";
import { baseUrl } from './api.service';

const socket = io(baseUrl);
export default socket;
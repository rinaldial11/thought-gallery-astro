// import { SOCKET_URL } from "@/constants/url";
import { io } from "socket.io-client";

export const socket = io("http://localhost:3000");

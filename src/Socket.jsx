import io from "socket.io-client";

let socket;

const connectSocket = (user_id) => {
  return new Promise((resolve, reject) => {
    // Create a new Socket.IO client instance
    socket = io("http://localhost:3000", {
      query: `user_id=${user_id}`,
      transports: ['websocket']
    });

    // Listen for the "connect" event to know when the connection is established
    socket.on("connect", () => {
      console.log("Socket.IO connected!");
      resolve(socket); // Resolve the promise with the socket instance
    });

    // Handle errors during the connection process
    socket.on("connect_error", (error) => {
      console.error("Socket.IO connection error:", error);
      reject(error); // Reject the promise with the error
    });
  });
};

export { socket, connectSocket };

import { io } from 'socket.io-client';

const socketURL = '//localhost:8014';

//  { transports: ['websocket'] }
export const socket = io(socketURL);

socket.on('events', function (data) {
	console.log('event', data);
});

socket.on('pipData', function (data) {
	console.log('pipData', data);
});

socket.on('exception', function (data) {
	console.log('exception', data);
});

socket.on('connect', () => {
	console.log('socket已连接');
});
socket.on('disconnect', () => {
	console.log('socket已断开');
});
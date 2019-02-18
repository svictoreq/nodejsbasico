module.exports = () => {
	let players = {},
		onWait = [],
		onMatch = {};

	const loop = setInterval(checkQueue, 5000);

	function checkQueue() {
		console.info(`Queues: { players: ${Object.keys(players).length}. onWait: ${onWait.length}, onMatch: ${Object.keys(onMatch).length} }`);
		while (onWait.length > 2) {
			console.log("Construcing room...");
			const p1 = players[onWait.pop()].user.name;
			const p2 = players[onWait.pop()].user.name;
			console.log(`We created a match for ${p1} and ${p2}.`);
		}
	}

	function createMatch(p1ID, p2ID) {
		const roomID = p1ID + p2ID;
		players[p1ID].roomID = roomID;
		players[p2ID].roomID = roomID;

		if (!onMatch[roomID]) onMatch[roomID] = {};

		players[p1ID].socket.emit("gameState", {});
		players[p2ID].socket.emit("gameState", {});
	}

	return {
		// user: {socket, user}
		userConnect: ({ socket, user }) => {
			if (!players[socket.id]) {
				// Add to player list
				players[socket.id] = { user, socket };
				// Add to waiting list
				onWait.push(socket.id);
			}
		},
		clear: () => clearInterval(loop),
		userDisconnect: (id) => {
			// Close ongoing game related to player if any
			console.log("On disconnect", id);
			if (players[id].roomID && onMatch[players[id].roomID]) {
				const roomID = players[id].roomID;
				// Put all players back on onWait
				onMatch[roomID].players.map(player => onWait.push(player.id));
				// Delete match room
				delete onMatch[players[id].roomID];
				// If the object gets deleted, reset it
				if (!onMatch) onMatch = {};
			}
			// Delete all instances of disconnecting player from waiting list (if any)
			onWait = onWait.filter(el => el !== id);
			// Delete from players list
			if (players[id]) {
				delete players[id];
				if (!players) players = {};
			}
		},
	}
};

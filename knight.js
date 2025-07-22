// Takes paramaters start and end which represent an 8 x 8 chess board start position
// So start: [0,0] would be the bottom left of the chess board, etc.
// This function finds the shortest path from start to end based on a knight's movement
function knightMoves(start, end) {
  // Knight can move in 8 directions (an L shape)
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];

  // BFS Setup

  // For the queue, the setup will be [[current position of Knight], [positions visited so far]]
  const queue = [[start, [start]]];
  // Use a set here for fast lookups compared to an array
  const visited = new Set();
  console.log(start.toString());
  visited.add(start.toString());

  while (queue.length > 0) {
    const [currentPosition, pathSofar] = queue.shift();
    const [x, y] = currentPosition;

    // If we have reached the end, stop and return the path
    if (x === end[0] && y === end[1]) {
      console.log(
        `You made it in ${pathSofar.length - 1} moves! Here's your path:`
      );
      pathSofar.forEach((position) => console.log(position));
      return pathSofar;
    }

    // Try all possible knight moves
    for (const [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;
      const newPosition = [newX, newY];

      if (isValidPosition(newX, newY) && !visited.has(newPosition.toString())) {
        visited.add(newPosition.toString());
        queue.push([newPosition, [...pathSofar, newPosition]]);
      }
    }
  }
}

function isValidPosition(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

// Testing
knightMoves([0, 0], [2, 5]);

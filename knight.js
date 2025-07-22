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
}

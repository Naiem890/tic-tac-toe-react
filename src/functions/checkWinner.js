export default function checkWinner(blocks) {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]) {
      return winningPatterns[a];
    }
  }
  return null;
}
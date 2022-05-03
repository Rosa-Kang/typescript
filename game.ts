const position = { x: 0, y: 0 };

type Direction = 'up' | 'down' | 'left' | 'right';
function move(direction: Direction) {
  switch (direction) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw Error(`unknown direction : ${direction}`);
  }
}

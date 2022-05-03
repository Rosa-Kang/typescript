type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command, b: number, c: number): number {
  switch (command) {
    case 'add':
      return b + c;
    case 'divide':
      return b / c;
    case 'multiply':
      return b * c;
    case 'remainder':
      return b % c;
    case 'substract':
      return b - c;
    default:
      throw Error('unkown');
  }
}

console.log('add', 1, 3);

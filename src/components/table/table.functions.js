import { range } from '@core/utils';

export function shouldResize(event) {
  return event.target.dataset.resize;
}

export function isCell(event) {
  return event.target.dataset.type === 'cell';
}

export function matrix($target, $cached) {
  const target = $target.id(true);
  const cached = $cached.id(true);

  const cols = range(cached.col, target.col);
  const rows = range(cached.row, target.row);

  return cols.reduce((acc, col) => {
    rows.forEach((row) => acc.push(`${row}:${col}`));
    return acc;
  }, []);
}

export function nextSelector(key, { row, col }) {
  const MIN_VALUE = 0;
  switch (key) {
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1;
      break;
    case 'ArrowRight':
    case 'Tab':
      col++;
      break;
    case 'ArrowDown':
    case 'Enter':
      row++;
      break;
    case 'ArrowLeft':
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1;
      break;
    default:
      break;
  }
  return `[data-id="${row}:${col}"]`;
}

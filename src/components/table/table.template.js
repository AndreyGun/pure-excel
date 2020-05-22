const CODES = {
  A: 65,
  Z: 90,
};
function toCell() {
  return `
        <div class="cell" contenteditable></div>
    `;
}
function toColumn(col) {
  return `
        <div class="column">${col}</div>
    `;
}
function createRow(content = [], index = '') {
  return `
        <div class="row">
            <div class="row-info">${index}</div>
            <div class="row-data">${content}</div>
        </div>
    `;
}
function toChar(_el, index) {
  // _el - ижним подчеркиванием обозначаем что не используем входящий параметр
  return String.fromCharCode(CODES.A + index);
}
export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  // const cols = Array.from(Array(colsCount).keys());
  const colsHeader = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('');
  // .map(createCol) = .map(el => createCol(el))

  rows.push(createRow(colsHeader));
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');
    rows.push(createRow(cells, i + 1));
  }

  return rows.join('');
}

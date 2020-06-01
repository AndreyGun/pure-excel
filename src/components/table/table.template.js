const CODES = {
  A: 65,
  Z: 90,
};
function toCell(_el, col = '') {
  return `
        <div class="cell" contenteditable data-col=${col}></div>
    `;
}
function toColumn(col, index) {
  return `
        <div class="column" data-type="resizable" data-col="${index}" >
          ${col}
          <div class="col-resize" data-resize="col"></div>
        </div>
    `;
}
function createRow(content = [], index = '') {
  const resize = index
    ? `<div class="row-resize" data-resize="row"></div>`
    : '';
  return `
        <div class="row" data-type="resizable">
            <div class="row-info">
              ${index}
              ${resize}
            </div>
            <div class="row-data">${content}</div>
        </div>
    `;
}
function toChar(_el, index) {
  // _el - ижним подчеркиванием обозначаем что не используем входящий параметр
  return String.fromCharCode(CODES.A + index);
}
export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1; // computed count
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
      .map(toChar)
      .map(toCell)
      .join('');
    rows.push(createRow(cells, i + 1));
  }

  return rows.join('');
}

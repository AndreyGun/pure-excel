import { ExcelComponent } from '@core/ExcelComponent';
import { $ } from '@core/dom';
import { shouldResize, isCell } from './table.functions';
import { resizeHandler } from './table.resize';
import { createTable } from './table.template';
import { TableSelection } from './TableSelection';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(15);
  }
  prepare() {
    this.selection = new TableSelection();
  }
  init() {
    super.init();
    const $cell = this.$root.find('[data-id="0:0"]');
    this.selection.select($cell);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(event, this.$root);
    } else if (isCell(event)) {
      const $target = $(event.target);
      if (event.shiftKey) {
        // this.selection.selectGroup($cell);
        // group
        const target = $target.id(true);
        const cached = this.selection.current.id(true);
        const cols = range(cached.col, target.col);
        const rows = range(cached.row, target.row);
        console.log(cols);
        console.log(rows);
        // cols 0, 1, 2
        // rows 0,1
        // [ 0:0, 0:1, 0:2 , 1:0, 1:1, 1:2 ]
        const x = cols.map((el) => rows.map((it) => `${it}:${el}`));

        // const array1 = [1, 2, 3, 4];
        // const reducer = (accumulator, currentValue) =>
              // accumulator + currentValue;
        // 5 + 1 + 2 + 3 + 4
        // console.log(array1.reduce(reducer, 5));
        console.log(x);
        cols.reduce();
      } else {
        this.selection.select($target);
      }
    }
  }
}

function range(start, end) {
  if (start > end) {
    [start, end] = [end, start];
  }
  return new Array(end - start + 1).fill('').map((_el, index) => {
    return start + index;
  });
}

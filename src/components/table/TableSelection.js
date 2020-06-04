export class TableSelection {
  static className = 'selected';
  constructor() {
    this.group = [];
    this.current = null;
  }

  clear() {
    this.group.forEach(($el) => $el.removeClass(TableSelection.className));
    this.group = [];
  }
  select($el) {
    this.clear();
    // $el instanceof DOM === true
    this.group.push($el);
    this.current = $el;
    $el.addClass(TableSelection.className);
  }

  selectGroup($el) {
    this.group.push($el);
    $el.addClass(TableSelection.className);
    this.group.forEach(element => {
      console.log(element);
    });
  }
}

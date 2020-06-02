export class TableSelection {
  constructor() {
    this.group = [];
  }

  select($el) {
    console.log($el);
    // $el instanceof DOM === true
    this.group.push($el);
    $el.addClass('selected');
  }

  selectGroup($elGroup) {
    $elGroup.forEach((el) => {
      this.group.push(el);
    });
  }
}

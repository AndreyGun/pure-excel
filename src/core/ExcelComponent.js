import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubscribers = [];
    this.prepare();
    console.log('options ExcelComponent');
    console.log(options.emitter);
  }
  // Настраиваем наш компонент до init
  prepare() {}
  // Возвращает шаблон компонента
  toHTML() {
    // пока ничего не делает.
    // return '';
  }

  // Уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }
  // инициализируем компонент
  // добавляем ДОМ слушатели
  init() {
    this.initDomListeners();
  }
  // Удаляем компонент
  // Чистим ДОМ слушателей
  destroy() {
    this.removeDomListeners();
    this.unsubscribers.forEach(unsub => unsub());
  }
}

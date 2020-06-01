import { $ } from '@core/dom';

export function resizeHandler(event, $root) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();

  const resizeType = $resizer.data.resize;
  const sideProp = resizeType === 'col' ? 'bottom' : 'right';
  let styleType = 'width';
  let value = 0;

  $resizer.css({
    opacity: 1,
    [sideProp]: '-5000px',
  });

  document.onmousemove = (e) => {
    if (resizeType === 'col') {
      const delta = e.pageX - coords.right;
      value = coords.width + delta;
      $resizer.css({ right: -delta + 'px' });
    } else {
      const delta = e.pageY - coords.bottom;
      value = coords.height + delta;
      $resizer.css({ bottom: -delta + 'px' });
      styleType = 'height';
    }
  };

  document.onmouseup = (e) => {
    if (resizeType === 'col') {
      $root.findAll(`[data-col="${$parent.data.col}"]`).forEach((el) => {
        $(el).css({ width: value + 'px' });
      });
    }
    $parent.css({ [styleType]: value + 'px' });
    $resizer.css({
      opacity: 0,
      bottom: '0',
      right: '0',
    });

    document.onmousemove = null;
    document.onmouseup = null;
  };
}

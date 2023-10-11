let map;
function initMap ()
  {
  map = new ymaps.Map("yandexmap", {
    center: [64.5401, 40.5433],
    zoom: 12
    });
  }
ymaps.ready(initMap);
function Warning() 
{
    swal("Внимание","Уважаемый пользователь,\n просим включить вас модуль геолокации для полноценной работы приложения.\n Спасибо!");
}
window.onload = Warning;

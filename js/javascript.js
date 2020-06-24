// $(document).ready(function () {
//    $('.slider').slick({
//       arrows: false, 		// стрелочки - видно или нет
//       dots: false, 			 //пагинация - точки списков
//       // adaptiveHeight:true,
//       // infinite: true,
//       centerMode: false,
//       slidesToShow: 3,		 //кол-во слайдов на экране
//       slidesToScroll: 1,	 // кол-во слайдов для прокрутки
//       speed: 1000, 		 //1000ms - 1 секунда
//       easing: 'ease',
//       touchTreshhold: 10,
//       autoplay: false,
//       autoplaySpeed: 700,
//       vertical: true,
//       infinite: true,
//    });

// });


$.datepicker.regional['ru'] = {
   closeText: 'Закрыть',
   prevText: 'Предыдущий',
   nextText: 'Следующий',
   currentText: 'Сегодня',
   monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
   monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
   dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
   dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
   dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
   weekHeader: 'Не',
   dateFormat: 'dd.mm.yy',
   firstDay: 1,
   isRTL: false,
   showMonthAfterYear: false,
   yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$(function () {

   $("#datepicker").datepicker();

});


// $('.link-add').click(function () {
//    $('.addform__btn-add').attr('data-dismiss', 'modal');
// })

//нашли родителя
let peopleList = document.querySelector('.people__menu');
let items = peopleList.children; //нашли детей
//нашли форму ввода новых данных
let addForm = document.querySelector('.addform');
//нашли заготовку для новых 
let tableTemplate = document.querySelector('#template').content;
var newItemTemplate = tableTemplate.querySelector('.people-item');


//находи поля ввода новых данных в форме
let NewNameField = document.querySelector('.addform__name-field');
let NewSurnameField = document.querySelector('.addform__surname-field');
let NewDateField = document.querySelector('.addform__date-field');

//создаем функцию по клику кнопку отправки
addForm.addEventListener('submit', function (evt) {
   evt.preventDefault();

   //созд перем клонированием заготовки дочернего элемента
   let newPeople = newItemTemplate.cloneNode(true);

   let peopleSurname = NewSurnameField.value;
   let peopleName = NewNameField.value;
   let peopleNameText = newPeople.querySelector('.people-item__name');
   peopleNameText.textContent = peopleName + ' ' + peopleSurname;

   let peopleBday = NewDateField.value;
   let peopleBdayText = newPeople.querySelector('.people-item__date');
   peopleBdayText.textContent = peopleBday;


   //добавляем в список нового дочерненого элемента=========================
   peopleList.appendChild(newPeople);

   $('.addform').trigger('reset');   //обнуляем введные данные в форму

   alert('Новый именник добавлен, жми закрыть')

});
// $('.addform__btn-add').attr('data-dismiss', 'modal');
// $('.addform__btn-add').removeAttr('data-dismiss');


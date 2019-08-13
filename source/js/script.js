//Открытие и закрытие главного меню

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

//
// //Ошибка или успех при отправки формы
// var reviewForm = document.querySelector(".feedback");
// var reviewButton = document.querySelector(".feedback__btn");
// var errorForm = document.querySelector(".modal--error");
// var successForm = document.querySelector(".modal--success");
// var requiredList = document.querySelectorAll("[required]");
// var closeErrorForm;
// var closeSuccessForm;
// var closeButtonLink;
// var requiredItem;
// var userName;
// var userSurname;
// var userTel;
// var userEmail;
// var messageContent;
// var isStorageSupport = true;
// var storageuserName = "";
// var storageuserSurname = "";
// var storageuserTel = "";
// var storageuserEmail = "";
// var storagemessageContent = "";
// var valName;
// var valSurname;
// var valTel;
// var valEmail;
//
// //проверка работы хранилища
// try {
//   storageuserName = localStorage.getItem("userName");
//   storageuserSurname = localStorage.getItem("userSurname");
//   storageuserTel = localStorage.getItem("userTel");
//   storageuserEmail = localStorage.getItem("userEmail");
//   storagemessageContent = localStorage.getItem("messageContent");
// } catch (err) {
//   isStorageSupport = false;
// }
//
// //форма отправки отзыва
// if (reviewButton) {
//   reviewForm.setAttribute("novalidate", "novalidate");
//   closeErrorForm = errorForm.querySelector(".modal__button");
//   closeSuccessForm = successForm.querySelector(".modal__button");
//   userName = reviewForm.querySelector("[id=name]");
//   userSurname = reviewForm.querySelector("[id=surname]");
//   userTel = reviewForm.querySelector("[id=tel]");
//   userEmail = reviewForm.querySelector("[id=email]");
//   messageContent = reviewForm.querySelector("[id=content]");
//
//   //Проверка полей формы
//   reviewForm.addEventListener("submit", function (evt) {
//     evt.preventDefault();
//     userName.classList.remove("form-section__input--error");
//     userSurname.classList.remove("form-section__input--error");
//     userTel.classList.remove("form-section__input--error");
//     userEmail.classList.remove("form-section__input--error");
//     valName = checkName(userName.value);
//     valSurname = checkName(userSurname.value);
//     valTel = checkTel(userTel.value);
//     valEmail = checkEmail(userEmail.value);
//     if (!valName || !valSurname || !valTel || !valEmail || messageContent.value == "") {
//       console.log("Заполните ваше имя, фамилию, телефон, обратный электронный адрес и текст отзыва");
//       errorForm.classList.remove("modal--show");
//       errorForm.offsetWidth = reviewForm.offsetWidth;
//       errorForm.classList.add("modal--show");
//       if (!valName) {
//         userName.classList.add("form-section__input--error");
//       }
//       if (!valSurname) {
//         userSurname.classList.add("form-section__input--error");
//       }
//       if (!valTel) {
//         userTel.classList.add("form-section__input--error");
//       }
//       if (!valEmail) {
//         userEmail.classList.add("form-section__input--error");
//       }
//       if (messageContent.value == "") {
//         messageContent.classList.add("form-section__input--error");
//       }
//     } else {
//         if (isStorageSupport) {
//           localStorage.setItem("userName", userName.value);
//           localStorage.setItem("userSurname", userSurname.value);
//           localStorage.setItem("userTel", userTel.value);
//           localStorage.setItem("userEmail", userEmail.value);
//           localStorage.setItem("messageContent", messageContent.value);
//         }
//         successForm.classList.remove("modal--show");
//         successForm.offsetWidth = reviewForm.offsetWidth;
//         successForm.classList.add("modal--show");
//       }
//   });
//
//   // снятие ошибки при фокусе
//   userName.onfocus = function() {
//     userName.classList.remove("form-section__input--error");
//   };
//
//   userSurname.onfocus = function() {
//     userSurname.classList.remove("form-section__input--error");
//   };
//
//   userTel.onfocus = function() {
//     userTel.classList.remove("form-section__input--error");
//   };
//
//   userEmail.onfocus = function() {
//     userEmail.classList.remove("form-section__input--error");
//   };
//
//   messageContent.onfocus = function() {
//     messageContent.classList.remove("form-section__input--error");
//   };
//
//   //Закрытие окон
//   closeErrorForm.addEventListener("click", function (evt) {
//     if (errorForm.classList.contains("modal--show")) {
//       errorForm.classList.remove("modal--show");
//       setFocus();
//     }
//   });
//
//   closeSuccessForm.addEventListener("click", function (evt) {
//     if (successForm.classList.contains("modal--show")) {
//       successForm.classList.remove("modal--show");
//     }
//   });
//
//   window.addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 27) {
//       evt.preventDefault();
//       if (errorForm) {
//         if (errorForm.classList.contains("modal--show")) {
//           errorForm.classList.remove("modal--show");
//           setFocus();
//         }
//       }
//       if (successForm) {
//         if (successForm.classList.contains("modal--show")) {
//           successForm.classList.remove("modal--show");
//         }
//       }
//     }
//   });
//
//   for (var i = 0; i < requiredList.length; i++) {
//     requiredItem = requiredList[i];
//     requiredItem.removeAttribute("required");
//   }
// }
//
// function setFocus() {
//   if (!valName) {
//     userName.focus();
//   } else {
//       if (!valSurname) {
//         userSurname.focus();
//       } else {
//           if (!valTel) {
//             userTel.focus();
//           } else {
//               if (!valEmail) {
//                 userEmail.focus();
//               } else {
//                   if (messageContent.value == "") {
//                     messageContent.focus();
//                   }
//                 }
//             }
//         }
//     }
// }
//
// function checkEmail(email) {
//   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//   if(reg.test(email) == false) {
//     console.log("Введите корректный e-mail");
//     return false;
//   }
//   return true;
// }
//
// function checkName(text) {
//   var letters = /^[A-Za-zА-Яа-я]+$/;
//   if(text.match(letters)) {
//     return true;
//   } else {
//       return false;
//     }
// }
//
// function checkTel(text) {
//   var letters = /^[0-9]+$/;
//   if(text.match(letters)) {
//     return true;
//   } else {
//       return false;
//     }
// }

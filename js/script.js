'use strict';

const dropdownBtn = document.querySelector('.dropdown__btn'),
   dropdownList = document.querySelector('.dropdown__list'),
   dropdownListItem = document.querySelectorAll('.dropdown__list-item'),
   dropdownBtnValue = document.querySelector('.dropdown__btn-value'),
   dropdownBtnArrow = document.querySelector('.dropdown__btn-arrow'),
   dropdownInput = document.querySelector('.dropdown__input-hidden'),
   infoTags = document.querySelector('.info__tags'),
   infoTagsBtn = document.querySelector('.info__tags-btn'),
   themeInput = document.querySelector('.info__theme-input'),
   themeDeleteBtn = document.querySelector('.info__theme-delete-btn'),
   nextBtn = document.querySelector('.next-btn');

dropdownBtn.addEventListener('click', (event) => {
   event.preventDefault();

   dropdownList.classList.toggle('dropdown__input-visible');
   dropdownBtn.classList.toggle('dropdown__btn-active');
   dropdownBtnArrow.classList.toggle('dropdown__btn-arrow-rotate');
});

dropdownListItem.forEach((item) => {
   item.addEventListener('click', (event) => {
      event.stopPropagation();

      dropdownBtnValue.textContent = item.getAttribute('data-value');
      dropdownInput.value = item.getAttribute('data-value');
      dropdownInput.value = item.getAttribute('data-value');

      dropdownBtn.focus();

      dropdownList.classList.toggle('dropdown__input-visible');
      dropdownBtn.classList.toggle('dropdown__btn-active');
      dropdownBtnArrow.classList.toggle('dropdown__btn-arrow-rotate');

      dropdownListItem.forEach((item) => {
         item.classList.remove('dropdown__list-item-target');
         item.lastChild.style.display = 'none';
      });
      item.classList.add('dropdown__list-item-target');
      item.lastChild.style.display = 'block';
   })
});

document.addEventListener('click', (event) => {
   if (event.target !== dropdownBtn) {
      dropdownList.classList.remove('dropdown__input-visible');
      dropdownBtn.classList.remove('dropdown__btn-active');
   }
})

const infoPurposeTextarea = document.querySelector('.info__purpose-textarea'),
   infoPurpose = document.querySelector('.info__purpose'),
   warningCount = document.querySelector('.warning_count'),
   warningText = document.querySelector('.warning_text');

infoPurposeTextarea.addEventListener('input', () => {
   let textLength = infoPurposeTextarea.value.length
   warningCount.textContent = `${textLength} / 200`;

   if (textLength > 200) {
      warningText.style.display = 'block';
      warningCount.classList.add('warning_hint');
      infoPurpose.classList.add('warning_hint');
      infoPurposeTextarea.classList.add('warning_hint-text');
   } else {
      warningText.style.display = 'none';
      warningCount.classList.remove('warning_hint');
      infoPurpose.classList.remove('warning_hint');
      infoPurposeTextarea.classList.remove('warning_hint-text');
   }

   if ((textLength > 0 && textLength <= 200) && themeInput.value.length > 0) {
      nextBtn.disabled = false;
   } else {
      nextBtn.disabled = true;
   }
})

themeInput.addEventListener('input', () => {
   if ((infoPurposeTextarea.value.length > 0 && infoPurposeTextarea.value.length <= 200) && themeInput.value.length > 0) {
      nextBtn.disabled = false;
   } else {
      nextBtn.disabled = true;
   }
});

themeDeleteBtn.addEventListener('click', () => {
   themeInput.value = '';
   nextBtn.disabled = true;
});

const minArr = ['Генетика', 'Анатомия человека', 'Вулканы', 'Зимние виды спорта', 'Радуга', 'Индийская культура'],
   fullArr = ['Генетика', 'Анатомия человека', 'Вулканы', 'Зимние виды спорта', 'Индийская культура', 'Радуга', 'Пеший туризм', 'Философия', 'Вселенная', 'Здоровые привычки', 'Бабочки', 'Белые медведи', 'Экономика', 'Финансовая грамотность', 'Фотосинтез'];

infoTagsBtn.addEventListener('click', () => {
   infoTags.classList.toggle('open');

   if (infoTags.classList.contains('open')) {
      infoTags.innerHTML = '';

      for (let i = 0; i < fullArr.length; i++) {
         let span = document.createElement('span');

         span.innerHTML = fullArr[i];
         infoTags.appendChild(span);
      }

   } else {
      infoTags.innerHTML = '';

      for (let i = 0; i < minArr.length; i++) {
         let span = document.createElement('span');

         span.innerHTML = minArr[i];
         infoTags.appendChild(span);
      }
   }
});

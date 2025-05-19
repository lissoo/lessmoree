document.addEventListener('DOMContentLoaded', function () {
  const colorBoxes = document.querySelectorAll('.color-box');
  const colorTexts = document.querySelectorAll('.color-text');
  const body = document.body;

function applyGlobalTextColor(color) {
  document.querySelectorAll('*').forEach(el => {
    el.style.color = color;

    if (color === '#FFFBED') {
      el.style.textShadow = '2px 2px 3px rgb(80, 80, 80)';
    } else {
      el.style.textShadow = 'none';
    }
  });
}

  colorBoxes.forEach(box => {
    box.addEventListener('click', (event) => {
      event.stopPropagation();

      const selectedColor = box.dataset.color;

      colorTexts.forEach(text => {
        text.style.display = 'none';
      });

      const targetText = document.querySelector('.color-text.' + selectedColor);
      if (targetText) {
        targetText.style.display = 'block';
      }

      if (selectedColor === 'be') {
        body.style.backgroundColor = '#3B96FF';
        applyGlobalTextColor('#FFFBED');
      } else {
        body.style.backgroundColor = '';
        applyGlobalTextColor('');
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.color-box')) {
      colorTexts.forEach(text => {
        text.style.display = 'none';
      });

      body.style.backgroundColor = '';
      applyGlobalTextColor('');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu li a');

  const sectionMap = {
    'WORK1': '.work1',
    'WORK2': '.work2',
    'WORK3': '.illust',
    'ABOUT': '.intro',
    'CONTACT': '.con'
  };

  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const text = this.textContent.trim();
      const selector = sectionMap[text];
      if (selector) {
        const target = document.querySelector(selector);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

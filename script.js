const content = [
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
  { riddle: 'riddle<br>riddle<br>riddle<br>riddle', answer: 'answer', prize: 'prize<br>prize<br>prize<br>prize' },
];

const dayIndex = new Date().getDate() - 1;

const main = document.getElementById('main');

const riddle = document.createElement('div');
riddle.classList.add('riddle');
riddle.innerHTML = content[dayIndex].riddle;

const input = document.createElement('input');
input.type = 'text';
input.autofocus = true;
input.classList.add('answer');

const prize = document.createElement('div');
prize.classList.add('prize');
prize.innerHTML = content[dayIndex].prize;

main.append(riddle, input);

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (input.value.toLowerCase() === content[dayIndex].answer) {
      main.removeChild(input);
      main.append(prize);
    } else {
      input.value = '';
      input.placeholder = 'wrong';
      setTimeout(() => {
        input.placeholder = '';
      }, 1000);
    }
  }
});

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const del = document.getElementById('del');
const umn = document.getElementById('umn');
const ravno = document.getElementById('ravno');
const otvet = document.getElementById('otvet');
let action = '+';

plus.onclick = function () {
  action = '+';
}

minus.onclick = function () {
  action = '-';
}

del.onclick = function () {
  action = '/';
}

umn.onclick = function () {
  action = '*';
}

function schet() {
  if (action === '+') {
    const sum = Number(input1.value) + Number(input2.value);
    otvet.textContent = sum;
  } else if (action === '-') {
    const sum = Number(input1.value) - Number(input2.value);
    otvet.textContent = sum;
  } else if (action === '/') {
    const sum = Number(input1.value) / Number(input2.value);
    otvet.textContent = sum;
  } else {
    const sum = Number(input1.value) * Number(input2.value);
    otvet.textContent = sum;
  }
}

ravno.onclick = schet;

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    schet();
  }
})

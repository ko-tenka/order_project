const regForm = document.getElementById('regForm'); // Предполагается, что ваша форма имеет id "regForm"
const regMsg = document.querySelector('.regMsg');
// const formNumber = (number) => {
//   const phoneReg = /(\+7|8)\D*(\d{3})\D*(\d{3})\D*(\d{2})\D*(\d{2})/gi;
//   if (number.match(phoneReg)) {
//     return number.replace(phoneReg, (match, g1, g2, g3, g4,
//     g5) => `+7 (${g2}) ${g3}-${g4}-${g5}`);
//   }
//   regMsg.innerText = 'Введите номер корректно';
//   regMsg.style.color = 'red';
//   setTimeout(() => {
//     regMsg.innerText = '';
//   }, 800);
// };

regForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(regForm);
  const res = Object.fromEntries(data);
  // res.number = formNumber(res.number);
  if (!res.password || !res.email || !res.login) {
    regMsg.innerText = 'Заполните все поля!';
  } else {
    const response = await fetch('/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    const result = await response.json();
    if (result.regDone) {
      regMsg.innerText = `Пользователь  с адресом ${res.email} успешно зарегистрирован!`;
      regMsg.style.color = 'red';
      setTimeout(() => {
        window.location.href = '/';
      }, 750);
    }
    if (result.err) {
      regMsg.innerText = `${result.err}`;
      regMsg.style.color = 'red';
    }
  }
});

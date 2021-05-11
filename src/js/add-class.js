const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  input: document.querySelector('#theme-switch-toggle'),
};

refs.input.addEventListener('click', onAddClassListBodylocalStorage);

saveTheme();

function onAddClassListBodylocalStorage(e) {
  const addClassName = document.body.classList.toggle('dark-theme');

  if (!addClassName) {
    localStorage.setItem('Theme', JSON.stringify({ LIGHT: 'light-theme' }));
    document.body.className = 'light-theme';
  }

  if (addClassName) {
    localStorage.setItem('Theme', JSON.stringify({ DARK: 'dark-theme' }));
    document.body.className = 'dark-theme';
  }
}

function saveTheme() {
  const saveValue = localStorage.getItem('Theme');

  if (saveValue) {
    const saveData = localStorage.getItem('Theme');
    const parseData = JSON.parse(saveData);

    document.body.className = parseData.LIGHT || parseData.DARK;
  }

  if (document.body.className === 'dark-theme') {
    refs.input.checked = 'rtue';
  }
}

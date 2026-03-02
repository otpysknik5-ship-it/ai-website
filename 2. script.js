// ===== КНОПКА НАВЕРХ =====
function initBackToTop() {
  const button = document.getElementById('backToTop');
  if (!button) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  });
}

// ===== ТЁМНАЯ ТЕМА =====
function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleBtn.textContent = '☀️';
  }
  
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
  });
}

// ===== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА =====
function showLang(lang, btn) {
  document.querySelectorAll('.lang-content').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  
  const content = document.getElementById(lang);
  if (content) {
    content.style.display = 'block';
  }
  if (btn) {
    btn.classList.add('active');
  }
  localStorage.setItem('site-lang', lang);
}

function initLanguage() {
  const saved = localStorage.getItem('site-lang') || 'ru';
  const btn = document.querySelector(`.lang-btn[onclick*="'${saved}'"]`);
  if (btn) {
    showLang(saved, btn);
  }
}

// ===== ЗАПУСК ВСЕГО =====
document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initTheme();
  initLanguage();
});

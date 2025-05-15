document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form form')
  const btn = form.querySelector('.form-submit')
  const phoneR = /^\+?[0-9\s\-()]{6,20}$/
  const mailR = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  const textR = /^[A-Za-zА-Яа-я0-9\s.,;!?'"()\-]{10,}$/u
  const nameR = /^[A-Za-zА-Яа-я\s\-]{2,}$/u

  form.addEventListener('submit', async e => {
    e.preventDefault()
    clearErrors()

    const fd = new FormData(form)
    const d = Object.fromEntries(fd.entries())
    let ok = true

    if (!nameR.test(d.name.trim())) {
      show('name', 'Имя должно содержать только буквы (2+ символа)');
      ok = false
    }
    if (!phoneR.test(d.phone.trim())) {
      show('phone', 'Неверный формат телефона');
      ok = false
    }
    if (!mailR.test(d.email.trim())) {
      show('email', 'Неверный формат email');
      ok = false
    }
    if (!textR.test(d.message.trim())) {
      show('message', 'Сообщение должно содержать минимум 10 символов');
      ok = false
    }

    if (!ok) return

    try {
      setState('sending')
      await new Promise(resolve => setTimeout(resolve, 1500))
      setState('success')
      form.reset()
      setTimeout(() => {
        setState('')
        btn.textContent = 'Отправить'
        btn.disabled = false
      }, 3000)
    } catch (error) {
      console.error('Ошибка:', error)
      setState('fail')
    }
  })

  function setState(st) {
    btn.classList.remove('sending', 'success', 'fail')
    if (st === 'sending') {
      btn.textContent = 'Отправляем…';
      btn.classList.add('sending');
      btn.disabled = true
    }
    if (st === 'success') {
      btn.textContent = 'Успешно отправлено';
      btn.classList.add('success');
      btn.disabled = true
    }
    if (st === 'fail') {
      btn.textContent = 'Ошибка, попробуйте ещё';
      btn.classList.add('fail');
      btn.disabled = false
    }
  }

  function show(id, msg) {
    const input = document.getElementById(id)
    const errorSpan = document.createElement('span')
    errorSpan.className = 'error-msg'
    errorSpan.textContent = msg
    input.classList.add('error')
    input.insertAdjacentElement('afterend', errorSpan)
  }

  function clearErrors() {
    document.querySelectorAll('.error-msg').forEach(n => n.remove())
    document.querySelectorAll('.error').forEach(input => input.classList.remove('error'))
  }
})

const openBtn = document.querySelector('.open-contact')
const modal = document.getElementById('contact')
const closeBtn = modal.querySelector('.contact-close')

function open() {
  modal.classList.add('open')
}

function close() {
  modal.classList.remove('open')
}

openBtn.addEventListener('click', open)
closeBtn.addEventListener('click', close)
modal.addEventListener('click', e => {
  if (e.target === modal) close()
})
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') close()
})

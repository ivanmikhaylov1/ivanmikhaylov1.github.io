document.addEventListener('DOMContentLoaded', () => {
  const thumbs = [...document.querySelectorAll('.gallery__image')]
  const lightbox = document.querySelector('.lightbox')
  const big = lightbox.querySelector('.lightbox-img')
  const prev = lightbox.querySelector('.lightbox-prev')
  const next = lightbox.querySelector('.lightbox-next')
  let i = 0

  const show = k => {
    i = k
    big.src = thumbs[i].src
    lightbox.classList.add('open')
    prev.classList.toggle('hidden', i === 0)
    next.classList.toggle('hidden', i === thumbs.length - 1)
  }

  const close = e => {
    if (e.target === lightbox) lightbox.classList.remove('open')
  }

  const slide = d => {
    const n = i + d
    if (n < 0 || n >= thumbs.length) return
    i = n
    big.src = thumbs[i].src
    prev.classList.toggle('hidden', i === 0)
    next.classList.toggle('hidden', i === thumbs.length - 1)
  }

  thumbs.forEach((img, idx) => img.addEventListener('click', () => show(idx)))
  lightbox.addEventListener('click', close)
  prev.addEventListener('click', e => {
    e.stopPropagation();
    slide(-1)
  })
  next.addEventListener('click', e => {
    e.stopPropagation();
    slide(1)
  })
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return
    if (e.key === 'Escape') lightbox.classList.remove('open')
    if (e.key === 'ArrowLeft') slide(-1)
    if (e.key === 'ArrowRight') slide(1)
  })
})

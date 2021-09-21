const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const log_in = document.querySelector('.log_in')
const log_in_btn = document.querySelector('.log_in_btn')
const log_in_input = document.querySelector('.ilog_in_nput')

btn.addEventListener('click',() => {
  search.classList.toggle('active')
  input.focus()
})

log_in_btn.addEventListener('click', () => {
  log_in.classList.toggle('active')
  log_in_input.focus()
})


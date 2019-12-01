"use strict";

const openButtonEl = document.getElementById("openButton")
const closeButtonEl = document.getElementById("closeButton")
const modalEl = document.getElementById("modal")
modalEl.style.display = 'none'

openButtonEl.addEventListener('click', () => {
  console.log("hoge")
  modalEl.style.display = 'unset'
})

closeButtonEl.addEventListener('click', () => {
  modalEl.style.display = 'none'
})
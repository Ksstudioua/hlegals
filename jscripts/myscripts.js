//+++++++++++++++++++++++++++++++++++++++++
//++++++ BURGER MENU OPEN/CLOSE +++++++++++
//+++++++++++++++++++++++++++++++++++++++++
let bOn = 0
function myburger() {
  let drop = document.querySelector('.dropdown')
  if (bOn == 0) {
    drop.style = `display: block;`
    bOn = 1
    return
  } else {
    drop.style = `display: none;`
    bOn = 0
    return
  }
}


//+++++++++++++++++++++++++++++++++++++++++
//+++++++++ LANGUAGE VAR LIST +++++++++++++
//+++++++++++++++++++++++++++++++++++++++++
let ua = ['про нас', 'послуги', 'команда', 'публікації', 'контакти']
let ru = ['о нас', 'услуги', 'команда', 'публикации', 'контакты']
let en = ['about us', 'services', 'team', 'publications', 'contacts']


//+++++++++++++++++++++++++++++++++++++++++
//+++ DECLARING VARIABLES FOR BLOCKS ++++++
//+++++++++++++++++++++++++++++++++++++++++
let parent = document.querySelector('.lang')
let dropmenu = document.querySelector('.dropdown')
let parentNav = document.querySelector('.navigation')


//+++++++++++++++++++++++++++++++++++++++++
//++++++++++ LANG RE-SET FUNCTION +++++++++
//+++++++++++++++++++++++++++++++++++++++++
function mylang(myvar) {
  clearLangMenuActive()

  if (myvar == 'ua') {
    for (let f = 0; f < ua.length; f++) {
      parentNav.children[f].innerText = ua[f]
      dropmenu.children[f].innerText = ua[f]
    }
    parent.children[0].classList.add('active')
  }

  if (myvar == 'ru') {
    for (let f = 0; f < ru.length; f++) {
      parentNav.children[f].innerText = ru[f]
      dropmenu.children[f].innerText = ru[f]
    }
    parent.children[1].classList.add('active')
  }

  if (myvar == 'en') {
    for (let f = 0; f < en.length; f++) {
      parentNav.children[f].innerText = en[f]
      dropmenu.children[f].innerText = en[f]
    }
    parent.children[2].classList.add('active')
  }
}


//+++++++++++++++++++++++++++++++++++++++++
//++++++ LANG MENU CLEAR CLASS ACTIVE +++++
//+++++++++++++++++++++++++++++++++++++++++
function clearLangMenuActive() {
  for (let clear = 0; clear < parent.children.length; clear++) {
    if ((parent.children[clear].contain = 'active'))
      parent.children[clear].classList.remove('active')
  }
}


//+++++++++++++++++++++++++++++++++++++++++
//++++++++ SET PAGE TITLE FUNCTION ++++++++
//+++++++++++++++++++++++++++++++++++++++++
function titleOn(pageTitle) {
  if (pageTitle != undefined) {
    let showPageTitle = document.querySelector('.page-info-wrap')
    let newPageTitle = document.querySelector('.page-info-wrap > h3')
    showPageTitle.style = 'display:flex;'
    newPageTitle.innerText = pageTitle
  } else {
    let showPageTitle = document.querySelector('.page-info-wrap')
    showPageTitle.style = 'display:none;'
  }
}

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
//++++++++ form open & close btn+++++++++++
//+++++++++++++++++++++++++++++++++++++++++
function popupOpen() {
  document.querySelector('.popup').style.display = 'flex'
}

function popupClose() {
  document.querySelector('.popup').style.display = 'none'
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
      parentNav.children[f].lastChild.innerText = ua[f]
      dropmenu.children[f].lastChild.innerText = ua[f]
    }
    parent.children[0].classList.add('active')
  }

  if (myvar == 'ru') {
    for (let f = 0; f < ru.length; f++) {
      parentNav.children[f].lastChild.innerText = ru[f]
      dropmenu.children[f].lastChild.innerText = ru[f]
    }
    parent.children[1].classList.add('active')
  }

  if (myvar == 'en') {
    for (let f = 0; f < en.length; f++) {
      parentNav.children[f].lastChild.innerText = en[f]
      dropmenu.children[f].lastChild.innerText = en[f]
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
function titleOn(pageTitle, newlink) {
  if (pageTitle != undefined) {
    let showPageTitle = document.querySelector('.page-info-wrap')
    let newPageTitle = document.querySelector('.page-info-wrap > a')
    showPageTitle.style = 'display:flex;'
    newPageTitle.innerHTML = pageTitle
  } else {
    let showPageTitle = document.querySelector('.page-info-wrap')
    showPageTitle.style = 'display:none;'
  }
  if (newlink != null) {
    pageLink(newlink)
  }
}

function pageLink(newlink) {
  let newPageTitleLink = document.querySelector('.page-info-wrap > a')
  newPageTitleLink.setAttribute('href', `${newlink}`)
  newPageTitleLink.style.cursor = 'pointer'
  console.log(newPageTitleLink)
}

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

let ua = ['про нас', 'послуги', 'команда', 'публікації', 'контакти']
let ru = ['о нас', 'услуги', 'команда', 'публикации', 'контакты']
let en = ['about us', 'services', 'team', 'publications', 'contacts']
let parent = document.querySelector('.lang')
let dropmenu = document.querySelector('.dropdown')
let parentNav = document.querySelector('.navigation')

function mylang(myvar) {
  clearLangMenu()

  if (myvar == 'ua') {
    for (let f = 0; f < ua.length; f++) {
      parentNav.children[f].innerHTML = ua[f]
      dropmenu.children[f].innerHTML = ua[f]
    }
    parent.children[0].classList.add('active')
  }

  if (myvar == 'ru') {
    for (let f = 0; f < ru.length; f++) {
      parentNav.children[f].innerHTML = ru[f]
      dropmenu.children[f].innerHTML = ru[f]
    }
    parent.children[1].classList.add('active')
  }

  if (myvar == 'en') {
    for (let f = 0; f < en.length; f++) {
      parentNav.children[f].innerHTML = en[f]
      dropmenu.children[f].innerHTML = en[f]
    }
    parent.children[2].classList.add('active')
  }
}

function clearLangMenu() {
  for (let clear = 0; clear < parent.children.length; clear++) {
    if ((parent.children[clear].contain = 'active'))
      parent.children[clear].classList.remove('active')
  }
}

function titleOn(pageTitle) {
  if (pageTitle != undefined) {
    let showPageTitle = document.querySelector('.page-info-wrap')
    let newPageTitle = document.querySelector('.page-info-wrap > h3')
    showPageTitle.style = 'display:flex;'
    newPageTitle.innerHTML = pageTitle
  } else {
    let showPageTitle = document.querySelector('.page-info-wrap')
    showPageTitle.style = 'display:none;'
  }
}

let myBigCaruselWrap = document.querySelector('.myBigCaruselWrap')
let myBigCaruselFrameLine = document.querySelector('.myBigCaruselFrameLine')
let myBigCaruselFrameItem = document.querySelector('.myBigCaruselFrameItem')
let myBigCaruselSelectors = document.querySelector('.myBigCaruselSelectors')

let haveFrames = myBigCaruselFrameLine.children.length
let frameNumber = 1
let direction = 0
//+++++++++++++++++++++++++++++++++++++++++++++++
//---- READ WIDTH & HEIGHT OF CARUSEL WRAPPER----
//+++++++++++++++++++++++++++++++++++++++++++++++

window.addEventListener('resize', stable)

setInterval(autoPlay, 30000)
//----------------------------------------------

function autoPlay() {
  if (frameNumber == haveFrames) {
    direction = 1
  }
  if (frameNumber == 1) {
    direction = 0
  }
  if (direction == 0) {
    frameNumber++
    frameSdvig(frameNumber)
  }
  if (direction == 1) {
    frameNumber--
    frameSdvig(frameNumber)
  }
}

function stable() {
  frameSize()
  frameNumber++
  frameNumber--
  frameSdvig(frameNumber)
}

function mbcFrame(myvar) {
  frameNumber = myvar
  frameSdvig(frameNumber)
}

function frameSdvig(frameNumber) {
  let sdvig = `calc(-${myBigCaruselWrap.offsetWidth}px * (${frameNumber} - 1))`
  myBigCaruselFrameLine.style = `transform: translate(${sdvig});`
  selectorclear()
  myBigCaruselSelectors.children[frameNumber - 1].classList.add(
    'myBigCaruselActive',
  )
}

function frameSize() {
  width = myBigCaruselWrap.offsetWidth
  height = myBigCaruselWrap.offsetHeight
  let sizes = document.createElement('style')

  sizes.innerHTML = `
.myBigCaruselFrameItem{width:${width}px; height:${height}px;}
.myBigCaruselFrameLine{height:${height}px; width: ${
    width * (haveFrames + 2)
  }px;}
`
  document.body.append(sizes)
}

function selectorclear() {
  for (let clear = 0; clear < haveFrames; clear++) {
    if ((myBigCaruselSelectors.children[clear].contain = 'myBigCaruselActive'))
      myBigCaruselSelectors.children[clear].classList.remove(
        'myBigCaruselActive',
      )
  }
}

window.onload = function () {
  //++++++++++++++++++++++++++++++++++++++++++
  //++++++++++ CARUSEL 1 ONLOAD ++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++
  grandSubTitle.innerHTML = info[0][0]
  Title.innerHTML = info[0][1]
  Txt.innerHTML = info[0][2]

  for (let createSel = 0; createSel < info.length; createSel++) {
    let addNewSelector = document.createElement('div')
    addNewSelector.classList.add('sel')
    addNewSelector.setAttribute('onclick', `carusel1(${createSel + 1})`)
    carusel1_Selectors.append(addNewSelector)
  }
  for (let createSel = 0; createSel < info.length; createSel++) {
    let addNewGrandTitle = document.createElement('a')
    addNewGrandTitle.classList.add('hero')
    addNewGrandTitle.classList.add('bold')
    addNewGrandTitle.classList.add('c7')
    addNewGrandTitle.setAttribute('onclick', `carusel1(${createSel + 1})`)
    addNewGrandTitle.innerHTML = info[`${createSel}`][0]
    grandTitle.append(addNewGrandTitle)
  }

  grandTitle.children[0].classList.add('active')
  carusel1_Selectors.children[0].classList.add('active')

  //++++++++++++++++++++++++++++++++++++++++++
  //++++++++++ CARUSEL BIG ONLOAD ++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++

  for (let createSel = 0; createSel < haveFrames; createSel++) {
    let addNewSelector = document.createElement('div')
    addNewSelector.classList.add('myBigCaruselSelector')
    addNewSelector.setAttribute('onclick', `mbcFrame(${createSel + 1})`)
    myBigCaruselSelectors.append(addNewSelector)
  }
  myBigCaruselSelectors.children[0].classList.add('myBigCaruselActive')
  frameSize()
}

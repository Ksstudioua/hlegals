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
window.addEventListener('load', myBigCarusel)

setInterval(autoPlay, 10000)
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

  document.querySelector('.myBigCaruselStyle').innerHTML = `
.myBigCaruselFrameItem{width:${width}px; height:${height}px;}
.myBigCaruselFrameLine{height:${height}px; width: ${
    width * (haveFrames + 2)
  }px;}
`
}

function selectorclear() {
  for (let clear = 0; clear < haveFrames; clear++) {
    if ((myBigCaruselSelectors.children[clear].contain = 'myBigCaruselActive'))
      myBigCaruselSelectors.children[clear].classList.remove(
        'myBigCaruselActive',
      )
  }
}

function myBigCarusel() {
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

  let addNewStyle = document.createElement('style')
  addNewStyle.classList.add('myBigCaruselStyle')
  addNewStyle.innerHTML=`<!-- javascript style create here -->`
  document.body.prepend(addNewStyle)
  frameSize()
}

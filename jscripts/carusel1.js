let grandTitle = document.querySelector('.carusel1 > .block > .grandTitle')
let grandSubTitle = document.querySelector(
  '.carusel1 > .block > .information > .grandSubTitle',
)
let Title = document.querySelector('.carusel1 > .block > .information > .title')
let Txt = document.querySelector('.carusel1 > .block > .information > .txt')
let carusel1_Selectors = document.querySelector('.carusel1 > .selectors')

let info = [
  [
    'Послідовні',
    'Перевертаємо уявлення про юридичні послуги',
    `Консолідуючи багаторічний досвід і практику, юристи компанії 
    супроводжують складні проекти і досягають прийняття ряду важливих 
    для галузі рішень. Багато з них формують практику застосування
    морського права в Україні.`,
  ],
  [
    'Клієнтоорієнтовані',
    'Ми клієнтоорієнтована команда',
    `Багаторічний досвід і практика дапомогають
  компанії краще досягати розуміння з клієнтом
  приймати конструктивні рішення для та заради злагоди клієнта.`,
  ],
  [
    'Інноваційні',
    'Інноваційні тенденції в юриспурденції',
    `Тут має бути якийсь текст для цього заголовку 
  та нажаль придумати його красиво не вийшло, одже буде так як є....
  P.S. Сорян друзяки, я дійсно намагався 😇😆`,
  ],
  [
    'Бізнес-орієнтовані юристи',
    'Бізнес-орієнтовані юридичні послуги',
    `Тут теж який небудь текст...
  Його напишуть інші люди, але це буду мабуть не я!`,
  ],
]

function clearActiveCarusel1() {
  for (let clear = 0; clear < info.length; clear++) {
    if ((grandTitle.children[clear].contain = 'active'))
      grandTitle.children[clear].classList.remove('active')
    carusel1_Selectors.children[clear].classList.remove('active')
  }
}

function carusel1(set) {
  clearActiveCarusel1()
  grandTitle.children[set - 1].classList.add('active')
  carusel1_Selectors.children[set - 1].classList.add('active')
  Title.innerHTML = info[set - 1][1]
  Txt.innerHTML = info[set - 1][2]
  grandSubTitle.innerHTML = info[set - 1][0]
}

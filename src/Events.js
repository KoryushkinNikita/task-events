/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
  let button = document.createElement('button')
  button.innerHTML = 'Удали меня'
  button.addEventListener('click', () => button.remove())
  document.body.append(button)

}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
  let list = document.createElement('ul')
  document.body.append(list)

  arr.forEach((el) => {
    let newli = document.createElement('li')
    newli.innerHTML = el
    newli.addEventListener('mouseover', () => newli.setAttribute('title', el))
    list.append(newli)
  })

}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
  let link = document.createElement('a')
  link.innerHTML = 'tensor'
  link.setAttribute('href','https://tensor.ru/')
  document.body.append(link)

  link.addEventListener('click',(e) => {
    let attributes = link.getAttributeNames()
    let href = link.getAttribute(attributes[0])
    if (!link.innerHTML.includes(href)){
      link.innerHTML += ` ${href}`
      e.preventDefault()
    }
  })
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
  let list = document.createElement('ul')
  document.body.append(list)
  let li = document.createElement('li')
  li.innerHTML = 'Пункт'
  li.addEventListener('click', () => li.innerHTML += `!`)
  list.append(li)
  let button = document.createElement('button')
  button.innerHTML = 'Добавить пункт'
  button.addEventListener('click', () => {
    let newli = document.createElement('li')
    newli.innerHTML = 'Пункт'
    newli.addEventListener('click', () => newli.innerHTML += `!`)
    list.append(newli)
  })
  document.body.append(button)

}

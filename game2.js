function fruitsGame(fruits) {

    fruits = fruits.sort(() => Math.random() - 0.5)

    alert(fruits)
    let answer1 = prompt('Чему равнялся первый элемент массива?')
    let answer2 = prompt('Чему равнялся последний элемент массива?')

    if (answer1 == fruits[0].toLowerCase() && answer2 == fruits[6].toLowerCase()) {
        alert('Правильно!')

    } else if (answer1 == fruits[0].toLowerCase() || answer2 == fruits[6].toLowerCase()) {
        alert('Вы были близки к победе')

    } else if (answer1 !== fruits[0].toLowerCase() || answer2 !== fruits[6].toLowerCase()) {
        alert('Неудача, попробуйте еще раз')
    }

}

fruitsGame(['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'])
function seasons(month) {
    if (month > 0 && month < 3 || month == 12) {
        alert('Зима')

    }
    else if (isNaN(month)) {
        alert('Вы ввели неверное значение')
    }
    else if (month > 2 && month < 6) {
        alert('Весна')
    }
    else if (month > 5 && month < 9) {
        alert('Лето')
    }
    else if (month > 8 && month < 12) {
        alert('Осень')
    }
    else {
        alert('Такого месяца не существует. В году 12 месяцев')

    }
}

seasons(prompt('Напишите номер месяца'))


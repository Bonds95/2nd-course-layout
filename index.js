function seasons(month) {
    if (month > 0 && month < 3 || month == 12) {
        console.log('Зима')

    }
    else if (isNaN(month)) {
        console.log('Вы ввели неверное значение')
    }
    else if (month > 2 && month < 6) {
        console.log('Весна')
    }
    else if (month > 5 && month < 9) {
        console.log('Весна')
    }
    else if (month > 8 && month < 12) {
        console.log('Весна')
    }
    else {
        console.log('Такого месяца не существует. В году 12 месяцев')

    }
}

seasons(3)
/*
    Один из возможных вариантов решения задачи.
*/

var mass = [2, 32, 45, 9, 10, 19, 4, 75, 33, 52, 24, 4, 65];
    
function rtnMass(array) {
    var max_1 = 0;
    var max_2 = 0;
    var index;
    
    // Поиск первого максимального элемента
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max_1) {
            max_1 = array[i];
            index = i;
        }
    }
    
    // Поиск второго максимального элемента
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max_2  && i != index) {
            max_2 = array[i];
        }
    }
    
    console.log("Max_1 = " + max_1 + "       " + "Max_2 = " + max_2);
    
    return max_1 * max_2;
}
    
console.log(mass);
console.log("Произведение равно " + rtnMass(mass)); //Вызов функции и вывод результатов произведения
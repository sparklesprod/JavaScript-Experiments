var mass = ["ток", "торс", "кот", "рост", "фывап", "Кто"];
var output = [];
    
function groupMass(array) {
    var min = Infinity;
    var max = 0;
    var length = array.length
    
    // Поиск элемента с минимальной длинной символов
    for (var i = 0; i < length; i++) {
        if (array[i].length < min) {
            min = array[i].length;
        }
    }
    
    // Поиск элемента с максимальной длиной символов
    for (var i = 0; i < length; i++) {
        if (array[i].length > max) {
            max = array[i].length;
        }
    }
    
    //console.log("Макс: " + max + " " + "Мин: " + min);
    max = max + (max-min);
    
    //Разбивка по группам
    for (var i = 0; i <= (max-min); i++) {
            var temp = [];
            for (var j = 0; j < length; j++) {

                if (array[j].length == min) {
                    temp.push(array[j]);
                }
            }
            if (min <= max) {
                min = min +1;
                output.push(temp);
            } else {
                output.push(temp);
            }
    }
    console.log(output);
}

console.log(mass);
groupMass(mass);
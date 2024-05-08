// Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js')

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

//Перевірка існування знайденого блоку 
if(itemsDiv) {

    //Вивід знайденого елементу 
    console.log(itemsDiv)
    // Вивід значення поля знайденого елементу
    // console.log('Поле classList: ', itemsDiv.classList)
    // console.log('Поле id: ', itemsDiv.id)
    // console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    // console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    // // Додавання тексту в блок
    // itemsDiv.innerText='Перший Програмно додано текст'
    // itemsDiv.innerText+='Другий Програмно додано текст'

    // //Додавання відформатованого HTML коду в блок 
    // itemsDiv.innerHTML = '<h1>Відформатований HTML код</h1>'
    // itemsDiv.innerHTML = '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>'

    for (let i =0; i<=100; i++){
        itemsDiv.innerHTML += '<div class = "item"></div>'}  

} else {

    //Вивід повідомлення про не знайдений блок 
    console.log("Блок товарів не знайдено")
}

//Визначення масиву товарів
// let itemsArray = ['','','','']
// console.log(itemsArray)

let itemsArray = [
   'Газонокосарка 43',
   'Електричний тример 110',
   'Електрична газонокосарка 32',
   'Акумуляторний оприскувач 12 N',
   'Газонокосарка 430'
]

console.log(itemsArray)


for(let i = 0; i < itemsArray.length; i++){
   console.log(itemsArray[i])
}
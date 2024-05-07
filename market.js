//перевірка підключеного файлу скриптів market.js
console.log('Перевірка підключеного файлу скриптів market.js')
 //Отримання елементу з індифікатором items
 let itemsDiv = document.getElementById("items");

 //Перевірка існування знайденого блоку
    if (itemsDiv) {
  //Вивід знайденого елементу
      console.log(itemsDiv)

      console.log('Поле classList:', itemsDiv.classList)
      console.log('Поле id:', itemsDiv.id)
      console.log('Поле clientWidth:', itemsDiv.clientWidth)
      console.log('Поле innerHTML:', itemsDiv.innerHTML)
 } else{
    console.log('Блок товарів не знайдено')
 }

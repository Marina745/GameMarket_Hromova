// Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')

let itemsArray = [
    // 'Газонокосарка 43',
    // 'Електричний тример 110',
    // 'Електрична газонокосарка 32',
    // 'Акумуляторний оприскувач 12 N',
    // 'Газонокосарка 430',
    // 'Електричний тример 130',
    // 'Електрична газонокосарка 320',
    // 'Акумуляторний оприскувач 12 Е',
    // 'Газонокосарка 4',
    // 'Електричний тример 10',
    // 'Електрична газонокосарка 3',
    // 'Акумуляторний оприскувач 12 ',
    // 'Газонокосарка 30',
    // 'Електричний тример 13',
    // 'Електрична газонокосарка 20T',
    // 'Акумуляторний оприскувач 12 B',
    // {
    //     firstName: "Віталій",
    //     lastName : "Шатківський",
    //     age: 43,
    //     subject:"інформатика",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    // },
    // {
    //     firstName: "Наталія",
    //     lastName : "Венцель",
    //     age: 18,
    //     subject:"Адміністратор",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
    // },
    // {
    //     firstName: "Вікторія",
    //     lastName : "Нелипович",
    //     age: 18,
    //     subject:"Математика",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
    // },
   
    // {
    //     firstName: "Лариса",
    //     lastName : "Забелло",
    //     age: 18,
    //     subject:"Англійська",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/zabello-l-o/",
    // },
    {
        title:"Мотокоска 43",
        image:"https://hotline.ua/img/tx/242/2426389075.jpg",
        lapka: 6,
        pb: 8,
        prise_normal: "5499 грн",
        prise_discoun: " 4497 грн",
        prise_coupon: " 4395грн",
    },
    
    {
        title:"Електричний тример 110",
        image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADlCAMAAAAP8WnWAAABxVBMVEX///8AAAAqKir8/PwyMjL+//8sLCw1NTUvLy8aGhoYGBg3NzckJCQWFhYoKCggICAODg48PDwLCwtGRkZBQUF1dXX09PRYWFhLS0va2tqbm5vt7e3Q0NC9vb1eXl5RUVGnp6fi4uJnZ2f+AACDg4Pk////+P+MjIwVEhjFxcVDPkOsrKx3dnf1//v/OAD3+f8NAAwjISaVk5YMAABEOjoAKhIoAABAHSnu//j/gIT5AAtPIA0iQj/87Or9UF7/NhDnPyddhoHl/On/ztb4KiP+Shz/cBKKPxwmIDQQJxr8sb7/AB3/WxhWNCgVEDEACwDrYgtkGisAFCigHg/y2t3LQjYyGiZIHBPlQwD/STj86fP7MT7/bRGTPCUAHSX+QgD9ZmROEhm/AhVpLSOnQSf7iYcAHixyZ11AISIAIjvXRw50VF4AGxd/PQBheHhmHgS2OQ3lWDUsSTYpN0JJIjeMKB6TfX/yq5n+eWk1JSJ6JyoiMCubIig9JBgwKR1SIiciOTNHPy/FnpzURUXUvKxyVE1wBA1cExKKFwCrKj0fDBI1FQqdAAD/0scPKifONy8YQ0H65tIiACIACBg3ABG3Iiv9VkQ1T/igAAAMo0lEQVR4nO2d+XvUxhnHNdJoNLOa0Uja07v2rr3e9a4PmZXXBOcgpimQOG3qNAmmThpIQknd1m16EWIg5KAtiWmu0uTv7TtacwTMQwik25nu93nw9QPPfJ7vO+8habSWNdJII4000kgjjTTSSCONNNJII430/yjHue3nO77rrjs5alOz8yawudnXyag8f/NPtTwCFcaGtaRHJBfi0XWSWhnJAr9BV4tDD+clQ8XSUBf38EqcA9bYQcYbRYJr2V9KAbBFtic5Y+NDXt1DynHd+ccO2cUmk6Sl9p6TRz72CxHDPOBo/v7/w/+oXIhKd+XxJ558aqERCyFglzlWHWHPiwoRtX0ZyOaw1/h95AKY6yaOe/jp6dUjPyIqgyAMKC1EPd8D5yJiYxbkh73Q7yPgAj3T/vHR6WPHn30OBWNTaygsTFQRAePKfhRhTHKUoAX9korrQpJ0kuT56Z/89PgLP1svtBOrKlCjiQLs4XLdi3yMKbUDIXzt6AAuaSftx6dXj7/485fWX34lSZwakq2mpBhXmnWITIyxbcuA8NqwF/vAcpx2Attt8fiJjZdO/mLzVWi/5lGzySmlhUaxTAHOAzafeZF2nQrEpPvKa9Onf/n6qVOvn37jcJJYs6hR5wTYKvVGRcERm/sxx3nt4GZWrIk339p88czb279aPHtgxXHGUNQA27BfaUQVn3oetTkViNP6sNf6wGonHfT2U7/e+s2h364+3247VonZebANR5VGHhcKtEADLltVZJPisNf6oHKd323//sQf3n7pnSObr7SdZMaKWIHaA98iu2BH2OayaHUQZdVhL/aBNdt/7o9/Wl97dvGNZ5KZlaTdjCNKgC3fiHwvsH0/UGxWEdkF7SqB1dz981/+evDcsbNQ7KDcvYsKOAC4QiWKfBtaFBIotnEUNLRLJ1aJc+hB1k9Mn3dnoAhMosiDImDLKCr4NqHQedlNxSbLJUc7ulpse4XCqXPvHYZGBYpA5EMRALegMYkIiUiAA79mNVDZ0fBaQy1n06hgL7sHoCaMIepLm2ARCOpBxlRsQFizanpOc44fED+ijXYyk5RCNdsEOORBSHysigCYqGEeuam6JF4UoRrMBgUWBTyw5R4czHHAVilpGI83tBAS7Edo1qo1ke9zmLllGPAQijgkS0o0zJG3CcY26keyXkSIRZ7kAcw2RDJIoYRUOKlWdb6wN4+I7fk0DiULPApwJGQBg/HblvWWTTrVSY333DjAwVTKggDqG+EKTtrgW9CczKOixq4plQAOGpEAKjYFMm6TGPt+ZHc6CE1aOla32+TEgOUve56Hd3Z2sCpzng8SqDw17LU9vPKSEH/Z9xXbDg5geOMB9TCaGPbCHoWaghJvzvd3trZ2bBxIiRASKBwz4t4OTGo27LKtN89s7WDYfbI50SlOaJwib1dHpUtsb1248MHyRc8P6wPDDLANxpgKg2xJrl66sINhGhC6Z//b5ECds22fkvfPnMSEE7lg6Te23UuOVRaw43Y+uHzZs0Wz0DIiHm8IjIMksrz1AaYbsyaBKS0I4nveh/TQxXXFZk5MKqM6SEJz4l/EoZ7D9r3lWPNdm3CwjgKbOaZZmW+TiEgPSZIzjs2xqr00FbTKo44BPfIdmkdp2vVLlmq1jPINaKqIS+EZ0kR+S4pNEhHrd7P0/hqwxRreCL6/FBujoRkD6R1SbIKbyraEQhki03oSJeWbYpsd9kJ+AGVsOcWmdW3bt8VXbLHQ3Lfxidp+1gzYYr3ZqjFCLeeutkrlEsWmdS6pVUQch9W72cC3UHM2q1YMYxGxOwrZgA2hMb1zidWqMy5y6I72qoNQrNi0lmPN5vO5UIjGt/5YzZ6C1ZxNqcUDIRhq3RaB4BtEpQFsloOJzIXsZs53rBZiZvgGmkIeYyHL3dh2HRRJYYRv2bZDXk4IUc46FQf2W94zxLfs+k9IGGRMdfPXGkdeJY5NmnEWOGehVHaV8rGUBY1Pddwlx2lgyQTDpVqgbpeOTRh0VcGxSpzKnGANdcyjWrrHnKCtphiVggmhHrswTZAyQxu2HY2LmreT+wjCcIkyTjxhIBzEZRdJUrDrBqJBrUtFGMiygWwwkPdIKpCW5/ruK3WPCpWbmj+eto9c9aBokMLQY6TUPSpgc4e9jh9CkwhicsG4iMxUVWxGxiTUgD4x17feICaNgwOgpThQbAZq8AwGlG7jbFNagr4EaXcI8ztIXTvpktTMlusWm3FBqQa4LpGKzbzGROUSmvbr8INpcMo3lUv0O63+HaRikqa9uu5HcPaTa1Vjmup5dvY+ymIS2OqmbTYllUtwGjcMzCV7+83ImMzYcNoz8zIX9CXAljfPNzfrSzBHep973l+uYpuT/Yp5zyurSFzqzaV9rc/i30MQk52+n/YM9C3Lk7GX9uYMZMtyiW8mG0ixdY1kU7kkytiMzCWQJ7v6veHvO2hQA7rYoCcwbkidW4x93vUMZLP2YtJE3wYxGXTtfR9C114txWaqb/Gc3U0N9E3VgO4gJs1TxpZ2iZlsS92IdNMpI2Oy1VX7zUA2UGePzTgNckkWk8ZdngSilrG+7cVkV/ezRvvoRkx2DTkfcIdae2xm+hbRnHHvZVHK6hvNCRNjMttvlHUNey+L0qAvwamRMZnlEpqCb8YZl/kWUdbT+nz3/srYCpSZGJNOFpNY9jV/n8J+2sslMp4wjw2aZYhJnPZNOre4J8cd1AAT3zsDMbnQnfMUm3nzW5ZLMjbHNLhBLvHSnkFHaffkQnZcSPd8G/ZiHrWy/VbwZN8831TxLnY9khrJZqk8KSWaNzAmFZufMjRpHpvKJT2cpv1J82qA2m8ISyN9cxQbxGTfQDYX2OLIUN8gl1xeTrv9u17cZYAcq7nz0eWNXtXI6yXF3rKUuwb6BkBNtJym4JtxJQDomjnIJQbuN3WAttgHtrhjHJtSs+9nbK5pcI7lFGNg63bMO9wHQdlMI491WybGpNNM5yIuWgYegIP6lkZzqTDVt8JcmnaGvY5HLNhszuxCms75KZad+dmSQX2XY5WqPurSOZ/jXPb20LJBt3PGEOoGOFJsYS4nQsBbGvaaHpk4QgFVbFLkclJym/rIlEeExpEgeC5KMQvsgJBAMjCvaEgdn0AehhrgSSkZ/JMcJBF0l64BeFMSLy+nyzzOCcFEjsG3HNtGwJZo7161ZUfLKU5RHIe3tN0fSxwnGfbiHkqONSWQKEiPqg9bjGOUfY373fXHPm4f0BzOGsuhGAWMsXCAFQsBBvZ68e6VJHGSmWGv72FUC2UYMkywZ1MuUCg5UWklSEP01t+ATudOZUraLIREEobgWRgQm+TzklJMaYwu/X2mnegal5P5aIIzP4zFID9yhpAIKnWCMc52IBp39XQO5lKVPgRWL6cXOehKQCGSvqA+JsQGtJdfqCV63gRxLMl4yAMeMmlTxhSbLeO4UGYSglJll38cXLFmtHQu+0RCAckjjMMcxxgSScBJiKI84aHP+mj3kzPXX00SLZ1TowA0WghzFEJLaWMK7TL84nPInvFaH13d/CQs6dt/+YLFqMJlLLgNadJTHwYdSqa6ZvE5evO1TyrDXuGDay8BOlM+k9CQxJTHYB3kED8gmAnJcjHqp+jKOT3fTunMTlTrPGu0kMocMmacwKjjywAilakebOfap6j/saXblpuab2ZXElAoKuNF+F4ZwyoyYd/ZF7fZxW64C3DnriH0z8+StlY1fB4PyLLP/uGdYvapHbWIx0IGgf35h2J9dxvYTl6BdLm5ciBZ0ai3dKYmm1Gj2SxHg+tALYbUK8hqkR3nZLBmHzq0u31994sz1wDwyNmVA87KsFf8veRMgIfME2hS/VbDQQhwWxtfbqPepS/We+vo6+mvtB15HKuUh9gMs4+2gKFO5cnPN9Iv5Tubr6/1dtfPrb6nWza5pexDSSBbUlUY1Bs3t9Hu2sb22oXXTh/5F1q/tLp4uO1ojDd124c3uaWNeH1j98yVJ499IWDaOTZ9Hsi0ZQONY7R3cxjarHdDdHDrwrX1qwe3r584uvhNu63nRHBLN19k4liz6xc+XdsW/z546uqR1cXNEoxymsPdlOuuXD73vipy114+Cmxfua4xbFbiWJW1XUiej53YPL34TW2mba3oWQb2EWy6pX7v+smvN1dPT7+nRh3lmyHeOcnM1IkjR46unl6cPg/Fe9jreaQCuOTs4uLi6cXNzxKN69u+coDos+nFxSeerjkHzMmTe3KB7vzmN+dXEkAz7gEbSz1D6rqu3n3JveRm9/0HPxmozDUjyUYaaaSRRhpppJFGGmmkkUYa6b+n/wD2608lZci3YAAAAABJRU5ErkJggg==",
        lapka: 6,
        pb: 8,
        prise_normal: " 4 497 грн",
        prise_discoun: " 3 498 грн",
        prise_coupon: " 3 396 грн",
    },

    {
        title:"Електрична газонокосарка 32",
        image:"data:image/jpeg;base64,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",
        lapka: 6,
        pb: 8,
        prise_normal: " 4 497 грн",
        prise_discoun: " 3 297 грн",
        prise_coupon: " 3 195 грн",
    },
    {
        title:"Акамуляторний обприскувач 12 N",
        image:"data:image/jpeg;base64,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",
        lapka: 6,
        pb: 8,
        prise_normal: " 2 190 грн",
        prise_discoun: " 1 698 грн",
        prise_coupon: " 1 596 грн",
    },
 ]

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
    itemsArray.forEach((item,index) =>{
       // console.log(item)
       //Спеціальний апостроф - Англійська розкладка - біля кнопки 1~
       //Виводимо на веб сторінку елемент масиву в блок з класом item
       itemsDiv.innerHTML += 
  // `
    //    <div class = "item">
    //    <h2>Вчитель № ${index +1 } з ${itemsArray.length}</h2>
    //    <p>${item.lastName} ${item.firstName}</p>
    //    <p><img src="${item.photo}" alt="${item.lastName} ${item.firstName}" class="user-photo"></p>
    //    <p>Вік: ${item.age} </p>
    //    <p>Предмет: ${item.subject} </p>
    //    <p><a href="${item.url}" target ="_blank"> Перейти на стрінку<a/></p>
    //     </div>
    //  `
      `
      <div class="item">

    <div class="item-title">${item.title}</div>

  
   <img src="${item.image}" class = "item-image"
   </div>
   <div class="parts-pay"> 
       <div><img src="img/mono-lapka.png" alt="">${item.lapka}</div>
       <div><img src="img/pb.png" alt="">${item.pb}</div>
       </div>

   <div class="price">
       <div><span></span><sup>${item.prise_normal}</sup></div>
       <div><span></span><sup>${item.prise_discoun}</sup></div>
   </div>

   <div class="prise bonus">
       <div> ціна за купоном</div>
       <div><span></span><sup>${item.prise_coupon}</sup></div>
   </div> 
   </div>
   </div>

      `
})

    // for (let i =0; i<=100; i++){
    //     itemsDiv.innerHTML += '<div class = "item"></div>'}  

} else {

    //Вивід повідомлення про не знайдений блок 
    console.log("Блок товарів не знайдено")
}

//Визначення масиву товарів
// let itemsArray = ['','','','']
// console.log(itemsArray)



console.log(itemsArray)

//Сортування масиву
// itemsArray = itemsArray.sort()


//Виведення в консоль номерів та значень елементів масиву
// for(let i = 0; i < itemsArray.length; i++){
//    console.log(i +'-й елемент:', itemsArray[i])
// }

//Виведення елементів відсортовоного масиву
// itemsArray.sort().forEach((item, index) =>{
//     console.log(index + '-й елемент:',item)
// })
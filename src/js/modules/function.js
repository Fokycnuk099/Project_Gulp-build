// // Проверка поддержки webpack, добавление класса webp или no-webp для HTML 
// export function isWebp(){
//     // Проверка поддержки webp 
//     function testWebP(callback){
//         let webP = new Image();
//         webP.onload = webP.onerror = function() {
//             callback(webP.height == 2);
//         };
//         webP.src = "data:images/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//     }
//     testWebP(function (support) 
//         {
//          let className = support === true ? 'webp' : 'no-webp';
//          document.documentElement.classList.add(className);
//         }
//         )
// }
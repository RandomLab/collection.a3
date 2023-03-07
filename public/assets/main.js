

// async function getData() {
    
//     let url = '/assets/db.json'

//     try {
    
//         let response = await fetch(url)
//         return await response.json()
    
//     } catch (error) {
    
//         console.error(error)
    
//     }

// }

// async function renderData() {

//     let data = await getData()

//     let html = ''

//     data.forEach(element => {
      
//         let htmlSegment = `<div class="item">

//                                 <date class="date">${element.date}</date>
                                
//                                 <a href="${element.url}">
//                                     <figure>
//                                         <img src="/assets/img/${element.image}">
//                                         <figcaption>${element.caption}</figcaption>
//                                     </figure>
//                                 </a>

//                                 <p>${element.tags}</p>

//                             </div>`


//         html += htmlSegment
    
//     })

//     let container = document.querySelector('.container')
//     container.innerHTML = html

// }


window.addEventListener('load', (event) => {
        
    // renderData()

})

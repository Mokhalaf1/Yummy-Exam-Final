

let sidebarOpen = false;

$('.bar-x').on('click', function() {
    if (!sidebarOpen) {
       
        $('.sidebarl').animate({ left: '0px' }, 1000);
        $('.sidebar').css({ right: '-230px' });
        $('.sidebarr').animate({ left: '230px' }, 1000, function() {
            $('.x').removeClass('d-none');
            $('.click-me').css('display', 'none');
        });
    } else {
       
        $('.sidebarl').animate({ left: '-230px' }, 1000);
        $('.sidebarr').animate({ left: '0px' }, 1000);
        $('.sidebar').animate({ right: '-230px' }, 1000);
        $('.click-me').css('display', 'flex');
        $('.x').css('display', 'none');
    }

   
    sidebarOpen = !sidebarOpen;
});






// -------------------------------Home----------------------------------------//

let homeBox= []
async function Home() {

  let homeApi= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  let homeData= await homeApi.json()

 
console.log(homeData)
displayHome(homeData.meals)
  
}

Home()

function displayHome(homeBox){

  let homecartona= ``

  for(i=0; i<homeBox.length; i ++){
  
    homecartona +=` 
  
  <div class="card overflow-hidden m-3 " id="getIt">
  
    <img src="${homeBox[i].strMealThumb}" alt="" class="card-img " >
  
    <div class="card-cover "> <h2>${homeBox[i].strMeal}</h2>
   
  
    </div>
  
  
  
  </div>`
  
  document.getElementById('mainpage1').innerHTML= homecartona;
console.log(homeBox);


let content=   document.getElementById('getIt')

$('.card').on('click' ,function(event){

  let clickedElement = content.target;

  console.log('Clicked element:', clickedElement)

  $('.mainpage').empty();
  $('.mainpagei').removeClass('d-none');
 
  document.getElementById('mainpage3').innerHTML= homecartona.target;
  
   })

}};


 






        // ---------------------search---------------------//

        // let searchArr1 = [];  debounce

        // async function search() {
        //     try {
        //         let sNameApi = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        //         let sNameData = await sNameApi.json();
        
        //         searchArr1 = sNameData.meals;
        
        //         $('.search').on('click', function () {
        //             $('.mainpage').empty();
        
        //             $('.mainpage').append(`
        //                 <div class="container-fluid search-bars h-100">
        //                     <nav class="navbar bg-dark">
        //                         <form class="d-flex w-100 h-100 justify-content-evenly mx-auto" role="search">
        //                             <input class="form-control me-2 bg-black search1" type="search" placeholder="Search By Name" aria-label="Search" id="firstSearch">
        //                             <input class="form-control me-2 bg-black search2" type="search" placeholder="Search By First Letter" aria-label="Search" id="secondSearch">
        //                         </form>
        //                     </nav>
        //                 </div>
        //             `);
        
        //             const firstSearchInput = $('#firstSearch');
        
        //             // Debounce function
        //             function debounce(func, wait) {
        //                 let timeout;
        //                 return function(...args) {
        //                     clearTimeout(timeout);
        //                     timeout = setTimeout(() => func.apply(this, args), wait);
        //                 };
        //             }
        
        //             // Search function
        //             const performSearch = debounce(function () {
        //                 let content = firstSearchInput.val().toLowerCase();
        //                 console.log(content);
        
        //                 let searchBox = '';
        
        //                 let filteredResults = searchArr1.filter(meal => 
        //                     meal.strMeal.toLowerCase().includes(content)
        //                 );
        
        //                 for (let i = 0; i < filteredResults.length; i++) {
        //                     searchBox += `

                            
        //                         <div class="card overflow-hidden">
        //                             <img src="${filteredResults[i].strMealThumb}" alt="" class="card-img">
        //                             <div class="card-cover">
        //                                 <h2>${filteredResults[i].strMeal}</h2>
        //                                 <p>${filteredResults[i].strInstructions}</p>
        //                             </div>
        //                         </div>`;
        //                 }
        
        //                 document.getElementById('mainpage1').innerHTML = searchBox;
        //             }, 300); // Adjust the debounce delay as needed
        
        //             firstSearchInput.on('input', performSearch);
        //         });
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // }
        
        // search();
        



        // working letter 


        let searchArr1 = []; 

        async function search() {
            try {
                let sNameApi = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
                let sNameData = await sNameApi.json();
        
                searchArr1 = sNameData.meals;
        
                $('.search').on('click', function () {
                    $('.mainpage').empty();

                    $('.mainpagef').removeClass('d-none')
        
                    // $('.mainpagef').append(`
                       
                    // `);
        
                    const firstSearchInput = $('#firstSearch');
        
                      firstSearchInput.on('input', async function () {
                          let content = $(this).val().toLowerCase();
                           console.log(content);
          
                          let searchBox = '';
          
                          let filteredResults = searchArr1.filter(meal => 
                              meal.strMeal.toLowerCase().includes(content)
                          );
        
                        for (let i = 0; i < filteredResults.length; i++) {
                            searchBox += `
                            
                                <div class="card overflow-hidden">
                                    <img src="${filteredResults[i].strMealThumb}" alt="" class="card-img">
                                    <div class="card-cover">
                                        <h2>${filteredResults[i].strMeal}</h2>
                                        <p>${filteredResults[i].strInstructions}</p>
                                    </div>
                                </div>`;
                        }
        
                        document.getElementById('mainpage2').innerHTML = searchBox;
                    });
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        
        search();
        
        
        




//         let searchArr1= [];
      

//         async function search(){

//         let sNameApi= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        
       
        
//         let sNameData= await sNameApi.json()
    

//         displaySearch(sNameData.meals)
 
        

//       $('.search').on('click', function (){

//         $('.mainpage').empty()
//         // $('.search-bars').css('display', 'inline')

//         $('.mainpage').append(`<div class="container-fluid search-bars h-100 ">
//             <nav class="navbar bg-dark ">
              
//                 <form class="d-flex w-100 h-100 justify-content-evenly mx-auto" role="search">
//                   <input class="form-control me-2 bg-black search1" type="search" placeholder="Search By Name" aria-label="Search" id="firstSearch">
//                   <input class="form-control me-2 bg-black search2" type="search" placeholder="Search By First Letter" aria-label="Search" id="secondSearch">
//                 </form>
              
//             </nav>
//           </div>`);

//           const firstSearchInput = $('#firstSearch');
//           // const secondSearchInput = $('#secondSearch');

      

//          firstSearchInput.on('input', function () {
//           let content= $('#firstSearch').val();
//             console.log(content);

//             let searchBox= ``;

//             for(i=0; i<searchArr1.length; i++) {
            
//             searchBox+= `<div class="card overflow-hidden">
            
//               <img src="${searchArr1[i].strCategoryThumb}" alt="" class="card-img " >
            
//               <div class="card-cover "> <h2>${searchArr1[i].strCategory}</h2>
//               <p> ${searchArr1[i].strCategoryDescription}</p>
            
//               </div>`
//               document.getElementById('mainpage1').innerHTML= searchBox;

//               displaySearch(sNameData.meals)
           
//         }});

        
       
//           });
      
//      }
        
//      search()


//         let firstSearchInput, secondSearchInput;
        
        

//             // $('.search1').on('input', function (){

//             //   var term= firstSearch.value;
          
//             //   console.log(term)
//           // $('.mainpage').html(`<div class="container-fluid search-bars vh-100">
//           //     <nav class="navbar bg-dark">
                
//           //         <form class="d-flex w-100 justify-content-evenly mx-auto" role="search">
//           //           <input class="form-control me-2 bg-black search1" type="search" placeholder="Search By Name" aria-label="Search" id="firstSearch">
//           //           <input class="form-control me-2 bg-black search2" type="search" placeholder="Search By First Letter" aria-label="Search" id="secondSearch">
//           //         </form>
                
//           //     </nav>
//           //   </div>

//           // </div>`)

        
      
  
// function displaySearch(meals){

//   let searchBox= ``;

// for(content=0; content<searchArr1.length; content++) {

// searchBox+= `<div class="card overflow-hidden">

//   <img src="${searchArr1[content].strCategoryThumb}" alt="" class="card-img " >

//   <div class="card-cover "> <h2>${searchArr1[content].strCategory}</h2>
//   <p> ${searchArr1[content].strCategoryDescription}</p>

//   </div>`
//   document.getElementById('mainpage1').innerHTML= searchBox;
// }
// }
// displaySearch()

                
//     // ----------------------------------- cat-----------------------//

//     let meals= [];

//     $('.cat').on('click',function(){
//         cat()

//     });

    
//     async function cat(){

//         let catApi= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        
//         let catData= await catApi.json();
        
        
//             console.log(catData);
        
//         displayCat (catData.categories)
//      }
     
     

//      function displayCat(meals){
//         let mealsbox= ``;

// for(i=0; i<meals.length; i ++){

//      mealsbox +=` 

// <div class="card overflow-hidden m-3">

//   <img src="${meals[i].strCategoryThumb}" alt="" class="card-img " >

//   <div class="card-cover "> <h2>${meals[i].strCategory}</h2>
//   <p> ${meals[i].strCategoryDescription}</p>

//   </div>



// </div>`

// document.getElementById('mainpage1').innerHTML= mealsbox;

// }

//      };



  // ----------------------------------- Area-----------------------//


  let areaBox= [];

  $('.area').on('click',function(){
    area()

});


  async function area() {
  
    let areaApi= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    let areaData= await areaApi.json()
  
   
  console.log('step');
  displayArea(areaData.meals);
    
  }
  
 
  
  function displayArea(areaBox){
  
    let areaCartona= ``
  
    for(i=0; i<areaBox.length; i ++){
    
      areaCartona +=` 
    
    <div class="card overflow-hidden container-fluid g-5">
    
   
     <i class="fa-solid fa-house text-white display-3 p-5"></i>
    
       <h2 class="text-white">${areaBox[i].strArea}</h2>
     
    
 
    
    
    
    </div>`
    
    document.getElementById('mainpage1').innerHTML= areaCartona;

  console.log('area');
  }}
  
  

     
// ----------------------------------- Ingredients-----------------------//

    
let ingBox= [];

  $('.ing').on('click',function(){
    ing()

});


  async function ing() {
  
    let ingApi= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    let ingData= await ingApi.json()
    
   
  
  console.log('ing');
  displayIng(ingData.meals);
    
  }
  
 
  
  function displayIng(ingBox){
  
    let ingCartona= ``
  
    for(i=0; i<ingBox.length; i ++){
    
      ingCartona +=` 
    
    <div class="card     position-relative m-2 overflow-hidden flex-wrap">
    
     <i class="fa-solid fa-drumstick-bite text-white display-2"></i>
    
       <div class="come w-100 h-100 overflow-hidden "> <h5 class="text-white">${ingBox[i].strIngredient}</h5>
     
    <p  class=" text-white overflow-hidden text-truncate"> ${ingBox[i].strDescription}</p>
    
    </div>
    </div>`
    
    document.getElementById('mainpage1').innerHTML= ingCartona;

  
  }}
  
  




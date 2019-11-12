let apiData = [];
$(() => {
const unpackData = (filter) => {
 $.ajax({url: 'http://localhost:3000/HP_Encyclopedia/mainContent/mozaic'}).then((data) => {
   console.log('Received', data);
   apiData = data;
   const mozaicContainer = $('.mozaicSearch');
   mozaicContainer.empty();
   console.log('data')
   data.forEach((item) => {
     console.log(item.category);
     console.log(filter);
     if(item.category === filter || filter === "ALL") {
       const imgDiv = $('<div>');
       imgDiv.addClass('detail-img');
       const mozaicImg = $('<img>');
       const imgPlaceholder = '/spells.jpg';
       if(item.img !== '') {
         mozaicImg.attr('src', item.img);
       } else {
         mozaicImg.attr('src', imgPlaceholder);
       }
       mozaicImg.addClass('entryImg shadowImg')
       imgDiv.append(mozaicImg);
       mozaicContainer.append(imgDiv);
       imgDiv.on('click', (event) => {
         console.log('clicked')
         window.location.href=`http://localhost:3000/HP_Encyclopedia/mainContent/mainDetail/${item._id}`;
       });
     }
   });
   hideEmptyDetails();
 });
}
 const hideEmptyDetails = () => {
   const $tableRows = $('.details-center').children().children();
  for(let row of $tableRows) {
    if(($(row).children().eq(1).text()) === '') {
     console.log('empty')
     $(row).hide();
    }
  }
 }
 $('#charBtn').on('click', (event) => {
   unpackData("Characters");
 })
 $('#potionsBtn').on('click', (event) => {
   unpackData("Potions");
 })
 $('#spellsBtn').on('click', (event) => {
   unpackData("Spells & Charms");
 })
 unpackData("ALL");
 






//  const menuBtn = $(‘#thisBtn’)
//  menuBtn.on(‘click’, () => {
//  // target slide out div
//  const slideOutDiv = $(‘mySidenav’)
//  slideOutDiv.css(‘width’, ‘250px’);
//  })
//  const inputVal = $(‘#thisInput’).val() (edited) 
 



//  $(document).ready(function() {

//   function toggleSidebar() {
//     $(".button").toggleClass("active");
//     $("main").toggleClass("move-to-left");
//     $(".sidebar-item").toggleClass("active");
//   }

//   $(".button").on("click tap", function() {
//     toggleSidebar();
//   });

//   $(document).keyup(function(e) {
//     if (e.keyCode === 27) {
//       toggleSidebar();
//     }
  // });

});


let apiData = [];
$(() => {
  const unpackData = (filter) => {
  $.ajax({url: 'http://localhost:3000/HP_Encyclopedia/mainContent/mozaic'}).then((data) => {
    console.log('Received', data);
    apiData = data;

    const mozaicContainer = $('.mozaicSearch');
    mozaicContainer.empty();

    console.log('datas')

    data.forEach((item) => {
      console.log(item.category);
      console.log(filter);
      if(item.category === filter || filter === "ALL") {
        const imgDiv = $('<div>');
        imgDiv.addClass('detail-img');
        const mozaicImg = $('<img>');
        mozaicImg.attr('src', item.img);
        mozaicImg.addClass('entryImg')
        imgDiv.append(mozaicImg);
        mozaicContainer.append(imgDiv);

        imgDiv.on('click', (event) => {
          console.log('clicked')
          window.location.href=`http://localhost:3000/HP_Encyclopedia/mainContent/mainDetail/${item._id}`;
        });
      }
    });
  });

    // target menu buttons
    // grab button text
    // use .filter() 
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


  // const $details = $('<div>').addClass('form-bkgnd');
  // const $entryName = $('<div').addClass('entry-name');
  // $details.append($entryName);

  // $('.carBtn').on('click', (event) => {
  //   console.log('category clicked')

  // });
  // const character = () => {

  //   for(let i=0; i < data.length; i++){ 
  //     const $name = $('<h2>').addClass('detailImg').text(`${data[i]}`);
  //     $entryName.append($name);

  //     const $divImage = $('<div>').addClass('detail-img');
  //     const $image = $('<img>').addClass('detailImg').text(src, "`{data[i].img}`");
  //     $divImage.append($image);
  //     $details.append($divImage);

  //     const $entryDetails = $$('<div>').addClass('entry-details');
  //     const $table = $('<table>').addClass('details-center');
  //     $entryDetails.append($table);
  //     $details.append($entryDetails);

  //     const $tr = $('<tr>')
  //     const $td1 = $('<td>').text('Description: ');
  //     const $td2 = $('<td>').text(`${data[i].description}`);
  //     $table.append($tr);
  //     $tr.append($td1);
  //     $tr.append($td2);

  //     const $trb = $('<tr>')
  //     const $td1b = $('<td>').text('Species: ');
  //     const $td2b = $('<td>').text(`${data[i].species}`);
  //     $table.append($trb);
  //     $tr.append($td1b);
  //     $tr.append($td2b);

  //     const $trc = $('<tr>')
  //     const $td1c = $('<td>').text('House: ');
  //     const $td2c = $('<td>').text(`${data[i].house}`);
  //     $table.append($trc);
  //     $tr.append($td1c);
  //     $tr.append($td2c);

  //     const $trd = $('<tr>')
  //     const $td1d = $('<td>').text('Date of Birth: ');
  //     const $td2d = $('<td>').text(`${data[i].DOB}`);
  //     $table.append($trd);
  //     $tr.append($td1d);
  //     $tr.append($td2d);

  //     const $tre = $('<tr>')
  //     const $td1e = $('<td>').text('Wand: ');
  //     const $td2e = $('<td>').text(`${data[i].wand}`);
  //     $table.append($tre);
  //     $tr.append($td1e);
  //     $tr.append($td2e);

  //     const $trf = $('<tr>')
  //     const $td1f = $('<td>').text('Patronus: ');
  //     const $td2f = $('<td>').text(`${data[i].patronus}`);
  //     $table.append($trf);
  //     $tr.append($td1f);
  //     $tr.append($td2f);


  //   }
  // }

});



// <%for(let i=0; i < allEntries.length; i++){ %>
//   <div>
//   <a href="#"><img class="entryImg shadowImg child" src="<%=allEntries[i].img%>"          
//       dataAll="<%=allEntries[i]%>"
//       dataName="<%=allEntries[i].name%>"
//       dataDescription="<%=allEntries[i].description%>"
//       dataSpecies="<%=allEntries[i].species%>"
//       dataHouse="<%=allEntries[i].house%>"
//       dataDateOfBirth="<%=allEntries[i].dateOfBirth%>"
//       dataYearOfBirth="<%=allEntries[i].yearOfBirth%>"
//       dataWand="<%=allEntries[i].wand%>"
//       dataPatronus="<%=allEntries[i].patronus%>"
//       dataActor="<%=allEntries[i].actor%>"
//       dataImg="<%=allEntries[i].img%>"
//       dataLikes="<%=allEntries[i].likes%>"
//       enterBtn="<%=allEntries[i]._id%>"
//       deleteBtn="<%=allEntries[i]._id%>"
//       ></a>
//   </div>
//   <%}%>
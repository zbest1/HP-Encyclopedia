$("document").ready(function(){
    $(".entryImg").click(function(event){

    $('#modal').show();

    console.log(event.currentTarget);

    const name = $(event.currentTarget).attr('dataName');
    const description = $(event.currentTarget).attr('dataDescription');
    const species = $(event.currentTarget).attr('dataSpecies');
    const house = $(event.currentTarget).attr('dataHouse');
    const dob = $(event.currentTarget).attr('dataDateOfBirth');
    const wand = $(event.currentTarget).attr('dataWand');
    const patronus = $(event.currentTarget).attr('dataPatronus');
    const actor = $(event.currentTarget).attr('dataActor');
    const img = $(event.currentTarget).attr('dataImg');
    const likes = $(event.currentTarget).attr('dataLikes');
    const enterbtn = $(event.currentTarget).attr('enterBtn');
    const deletebtn = $(event.currentTarget).attr('deleteBtn');
    console.log(name)

    $("#modalName").text(name);
    $("#modalDescription").text(description);
    $("#modalSpecies").text(species);
    $("#modalHouse").text(house);
    $("#modalDOB").text(dob);
    $("#modalWand").text(wand);
    $("#modalPatronus").text(patronus);
    $("#modalActor").text(actor);
    $("#modalImage").attr('src', img);
    $("#modalLikes").text(likes);
    $("#modalEnter").text(enterbtn);
    $("modalDelete").text(deletebtn);

    console.log('test')
});
  });
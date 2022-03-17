
//Search Muncipility
const form = document.getElementById('form');
const search = document.getElementById('search');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  var searchText = search.value.replace(/\s/g, "");
  var searchTerm1 = searchText.toUpperCase();
  var searchTerm = searchTerm1;

document.getElementById("showLocals").style.display = "block";
document.getElementById("showActivities").style.display = "block";
document.getElementById("showRegion").style.display = "block";


fetch('municipalities.json')
  .then((res) => res.text())
  .then(data => JSON.parse(data))
  .then((data) => {
  //console.log(searchTerm);
  data.Municipalities.forEach(function (Municipalities) {
  if (`${Municipalities.Ort}` === searchTerm) {
    document.getElementById('output').innerHTML =
    `<h3><b>The Contact Information</b></h3>
      <ul class="fetch-inter">
        <li>Ort: ${Municipalities.Ort}</li>
        <li>Region namn: ${Municipalities['Region namn']}</li>
        <li>E-Post: ${Municipalities['E-post']}</li>
        <li>Telefon: ${Municipalities.Telefon}</li>
        <li>Webbadress: ${Municipalities.Webbadress}</li>
        <li>Postnr: ${Municipalities.Postnr}</li>
        <li>Lans kod: ${Municipalities.Lanskod}</li>
      </ul>`;
    var kod = `${Municipalities.Kommunkod}`;
    var kodlan = `${Municipalities.Lanskod}`;
    //console.log(kod);
    //console.log(kodlan);
    
    //function ShowRegion()
    document.getElementById('showRegion').addEventListener('click', showRegion);
    function showRegion() {
      fetch('regions.json')
      .then((res) => res.text())
      .then(data => JSON.parse(data))
      .then((data) => {
        data.Region.forEach(function (Region) {
          if (`${Region.Lanskod}` === kodlan) {
            document.getElementById('output3').innerHTML =`<h3><b>Regions Name</b></h3>
                                                            <ul class="fetch-inter">
                                                              <li><b> ${Region.NameSV}</b></li>
                                                              <li> ${Region['E-post']}</li>
                                                              <li> ${Region['Telefon']}</li>
                                                              <li> ${Region.Webbadress}</li>
                                                              <li> ${Region['Postaddress 1']}</li>
                                                              <li>Postnr: ${Region.Postnr}</li>
                                                              <li> ${Region.Ort}</li>
                                                            </ul>`;
    //function showLocals()
    document.getElementById('showLocals').addEventListener('click', getLocals);
    function getLocals() {
      fetch('locals.json')
      .then((res) => res.text())
      .then(data => JSON.parse(data))
      .then((data) => {
      data.Locals.forEach(function (Locals) {
      //console.log(`${Locals.KommunID}`);
      if (`${Locals.KommunID}` === kod) {
        document.getElementById('output1').innerHTML =`<h3><b>Locals Name</b></h3>
                                                        <ul class="fetch-inter">
                                                          <li>Name: ${Locals.Name}</li>
                                                          <li>TypeOfHelp: ${Locals.TypeOfHelp}</li>
                                                          <li>What languages speak?: ${Locals['What languages speak?']}</li>
                                                          <li>Contact info: ${Locals['Contact info']}</li>
                                                          <li>KommunID: ${Locals.KommunID}</li>
                                                        </ul>`;
    //function getactivities()
    document.getElementById('showActivities').addEventListener('click', showActivities);
    function showActivities() {
    fetch('activities.json')
      .then((res) => res.text())
      .then(data => JSON.parse(data))
      .then((data) => {
        data.Activities.forEach(function (Activities) {
          if (`${Activities.KommunID}` === kod) {
            document.getElementById('output2').innerHTML += `<h3><b>Aktivities</b></h3>
                                                              <ul class="fetch-inter-activity">
                                                                <li><span>${Activities.TitleSV}</span><b> ${Activities.Date}</b></li>
                                                                <li><b>Time :</b> ${Activities['Time from']} - ${Activities['Time To']}</li>
                                                                <li><b>Discription SV. :</b> ${Activities.DescriptionSV}</li>
                                                                <li><b>Title UA. :</b> ${Activities.TitleUA}</li>
                                                                <li><b>Description UA. :</b> ${Activities.DescriptionUA}</li>
                                                                <li><b>Adress :</b> ${Activities.Adress}</li>
                                                                <li><b>Booking Link :</b> ${Activities['Booking link']}</li>
                                                                <li><b>Name RU. :</b> ${Activities.NameRU}</li>
                                                                <li><b>Description RU. :</b>${Activities['Description RU']}</li>
                                                                <li><b>Name EN :</b> ${Activities.NameEN}</li>  
                                                                <li><b>Link :</b> <ins>${Activities.Link}</ins></li>
                                                                <li><b>Booking Link :</b> <ins>${Activities['Booking link']}</ins></li>
                                                                <li><b>Picture :</b> ${Activities.PictureSV}</li>
                                                              </ul>`;}
                                                        });
                                                    })
                                                 }
                                               }
                                           });
                                         })
                                      }
                                 }   
                          });
                     })
                 }
             };
        })
    })
})


// The Nav links upp ...............ALL INFORMATION IN JSON FILE...............................

// BUTTON NUMBER 5 .....  GET MUNICIPILOTIES .......

document.getElementById('getMuncipility').addEventListener('click', getMuncipility);

function getMuncipility() {
  fetch('municipalities.json')
    .then((res) => res.text())
    .then(data => JSON.parse(data))
    .then((data) => {
      let bodyInformation2 = '<h2><b>Municipilties in Sweden</b></h2>';
      console.log(data);
      data.Municipalities.forEach(function (Municipalities) {
        bodyInformation2 += `
        <div class="box-5-container">
          <ul class="list-group-links-5">
            <li><span>${Municipalities.Ort}- ${Municipalities['Region namn']} </span></li>
            <li><b> Post Number :</b>${Municipalities.Postnr}</li>
            <li><b>E-Post :</b> ${Municipalities['E-post']}</li>
            <li><b>Tel :</b>${Municipalities.Telefon}</li>
            <li><b> Webbsite :</b><ins>${Municipalities.Webbadress}</ins></li>
          </ul>
        </div> `; });
      document.getElementById('bodyInformation2').innerHTML = bodyInformation2;
    })
}


// BUTTON NUMBER 4 .....  GET REGION .......

document.getElementById('getRegion').addEventListener('click', getregionlist);

function getregionlist() {
  fetch('regions.json')
    .then((res) => res.text())
    .then(data => JSON.parse(data))
    .then((data) => {
      let bodyInformation2 = '<h2 class="mb-4"><b>There are 21 Regions in Sweden</b></h2>';
      console.log(data);
      data.Region.forEach(function (Region) {
        bodyInformation2 += `
        <div class="box-5-container">
          <ul class="list-group-links-4">
            <li><span> ${Region.NameSV}</span></li>
            <li><b>Email:</b> ${Region['E-post']} </li>
            <li><b> Tel : </b> ${Region.Telefon} </li>
            <li><ins> ${Region.Webbadress}</ins></li>
          </ul>
          </div>
            `;});
      document.getElementById('bodyInformation2').innerHTML = bodyInformation2;
    })
}

// BUTTON NUMBER 3 .....  GET LOCALS .......

document.getElementById('getLocals').addEventListener('click', getLocals);

function getLocals() {
  fetch('locals.json')
    .then((res) => res.text())
    .then(data => JSON.parse(data))
    .then((data) => {
      let bodyInformation2 = '<h2 class="mb-4"><b>Locals in Sweden</b></h2>';
      console.log(data);
      data.Locals.forEach(function (Locals) {
        bodyInformation2 += `
        <div class="box-5-container">
        <ul class="list-group-links-3">
          <li><b> Name : </b> ${Locals.Name}  - <b> Type Of Help : </b> ${Locals.TypeOfHelp}</li>
          <li><b> What languages speak : </b> ${Locals['What languages speak?']}</li>
          <li><b> Contact information : </b>${Locals['Contact info']}</li>
        </ul></div>
        `;});
      document.getElementById('bodyInformation2').innerHTML = bodyInformation2;
    })
}


// BUTTON NUMBER 2 .....  GET ACTIVITIES .......

document.getElementById('getActivities').addEventListener('click', getActivities);

function getActivities() {
  fetch('activities.json')
    .then((res) => res.text())
    .then(data => JSON.parse(data))
    .then((data) => {
  
      data.Activities.forEach(function (Activities) {
        bodyInformation2 = ``;
        if ("2022-03-25" > `${Activities.Date}` && `${Activities.Date}` > "2022-03-21"){
          
          console.log(` ${Activities.TitleSV}`);
           document.getElementById('bodyInformation2').innerHTML= ` 
           <div class="box-5-container">
           <ul class="list-group-links-2">
              <li><span>${Activities.TitleSV}</span><b> ${Activities.Date}</b></li>
              <li> ${Activities.DescriptionSV}</li>
              <li>Adress: ${Activities.Adress}</li>
              <li>Booking Link: ${Activities['Booking link']}</li>
              <li>Time: ${Activities['Time from']} - ${Activities['Time To']}</li>
          </ul></div>
          `;};

        if ("2022-04-01" > `${Activities.Date}` && `${Activities.Date}` > "2022-03-28"){
          
          console.log(` ${Activities.TitleSV}`);
           document.getElementById('bodyInformation2').innerHTML= ` 
           <div class="box-5-container">
           <ul class="list-group-links-2">
              <li><span>${Activities.TitleSV}</span><b> ${Activities.Date}</b></li>
              <li> ${Activities.DescriptionSV}</li>
              <li>Adress: ${Activities.Adress}</li>
              <li>Booking Link: ${Activities['Booking link']}</li>
              <li>Time: ${Activities['Time from']} - ${Activities['Time To']}</li>
          </ul></div>
          `;};

        
        if ("2022-04-08" > `${Activities.Date}` && `${Activities.Date}` > "2022-04-04"){
          
          console.log(` ${Activities.TitleSV}`);
           document.getElementById('bodyInformation2').innerHTML= ` 
           <div class="box-5-container">
           <ul class="list-group-links-2">
              <li><span>${Activities.TitleSV}</span><b> ${Activities.Date}</b></li>
              <li> ${Activities.DescriptionSV}</li>
              <li>Adress: ${Activities.Adress}</li>
              <li>Booking Link: ${Activities['Booking link']}</li>
              <li>Time: ${Activities['Time from']} - ${Activities['Time To']}</li>
          </ul></div>
          `;};
      });
     
    })
}


// BUTTON ....  GET GOOD TO KNOW ....... 

document.getElementById('getgoodtoknowlist').addEventListener('click', getgoodtoknowlist);

function getgoodtoknowlist() {
  fetch('GoodToKnow.json')
    .then((res) => res.text())
    .then(data => JSON.parse(data))
    .then((data) => {
      const x = data.GoodToKnow;
      console.log(data);
      let bodyInformation1 = '';
      bodyInformation1 = `
      <h2 class="mb-4">Good to know</h2>
      <div class="box-5-container">
        <ul class="list-group-links-1-1">
          <li><span>${x[0].TitleSV}</span></li>
          <li>${x[0].DescriptionSV}</li>
        </ul>
          <ul class="list-group-links-1-2">
          <li><span>${x[1].TitleSV}</span></li>
          <li>${x[1].DescriptionSV}</li>
        </ul>`;
      document.getElementById('bodyInformation1').innerHTML = bodyInformation1;
    })
}


/*    -----------------------------------------------------------------------------------------*/
/*Good To Know
document.getElementById('getInfo').addEventListener('click', getInfo);

function getInfo() {
  fetch('GoodToKnow.json')
    .then((res) => res.text())
    .then(data => JSON.parse(data))
    .then((data) => {
      let output = '<h2 class="mb-4">Good to know</h2>';
      console.log(data);

      data.GoodToKnow.forEach(function (ayat) {
        console.log(ayat.TitleSV);
      });

      data.GoodToKnow.forEach(function (GoodToKnow) {
        output += `
          <ul class="list-group">
              <li class="list-group-item"><b>ID:</b> ${GoodToKnow.ID}</li>
              <li class="list-group-item"><b>Contry:</b> ${GoodToKnow.Contry}</li>
              <li class="list-group-item"><b>TitleSV:</b> ${GoodToKnow.TitleSV}</li>
              <li class="list-group-item"><b>DescriptionSV:</b> ${GoodToKnow.DescriptionSV}</li>
              <li class="list-group-item"><b>NameUA:</b> ${GoodToKnow.NameUA}</li>
              <li class="list-group-item"><b>NameRU:</b> ${GoodToKnow.NameRU}</li>
              <li class="list-group-item"><b>NameEN:</b> ${GoodToKnow.NameEN}</li>
              <li class="list-group-item"><b>Link:</b> ${GoodToKnow.Link}</li>
              <li class="list-group-item"><b>KommunID:</b> ${GoodToKnow.KommunID}</li>
              <li class="list-group-item"><b>RegionID:</b> ${GoodToKnow.RegionID}</li>
              <li class="list-group-item"><b>PictureSV:</b> ${GoodToKnow.PictureSV}</li>
              <li class="list-group-item"><b>PictureUA:</b> ${GoodToKnow.PictureUA}</li>
              <li class="list-group-item"><b>PictureRU:</b> ${GoodToKnow.PictureRU}</li>
              <li class="list-group-item"><b>PictureEN:</b> ${GoodToKnow.PictureEN}</li>
              <li class="list-group-item"><b>DataTime:</b> ${GoodToKnow.DataTime}</li>
              <li class="list-group-item"><b>DateFrom:</b> ${GoodToKnow.DateFrom}</li>
              <li class="list-group-item"><b>DateTo:</b> ${GoodToKnow.DateTo}</li>
          </ul>
          `;
      });

      document.getElementById('output').innerHTML = output;

    })
}*/
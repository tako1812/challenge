
const takop = document.querySelector('.tako');

const cars =document.querySelector('.carTypes-container');
const vehicle = document.querySelector(".vehicle5");
const carDetainsContainer = document.querySelector('.car-details');
returnedData = [];

const renderViewMorePets = async function () {
 
  const res = await fetch("../json.data");
  const datas = await res.json();
  console.log(datas);
  returnedData.push(datas);
    
};
renderViewMorePets();

console.log(returnedData);

const clicked =[];
cars.addEventListener("click", function (e) {
  document.querySelectorAll('[type="checkbox"]').forEach((item) => {
    if (item.checked === true) {
      clicked.push(item.dataset.inputData);
    }
});
console.log(clicked);

returnedData[0].map(function(data) {
      if(data.category === item.dataset.inputData) {
        console.log(111110);
        const html= `
          <img src="data.photos[0]" class="main-img">
          <div class="images-row">
            <img src="data.photos[1]"/>
            <img src="data.photos[2]">
            <img src="data.photos[3]">
          </div>
        `;
        carDetainsContainer.innerHTML += html;
      }
    });
  });














/*cars.addEventListener("click", function (e) {
    document.querySelectorAll('[type="checkbox"]').forEach((item) => {
     
      datas.map(function(data) {
        if(data.category === item.dataset.inputData) {
          const html= `
        <img src="" class="main-img">
            <div class="images-row">
              <img src=""/>
              <img src="">
              <img src="">
            </div>
          `;
        }
      });

    });
  });*/
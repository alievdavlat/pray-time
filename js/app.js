''
const getData  = async (city) => {
  const base = `https://islomapi.uz/api/present/day?region=${city}`
  
  const request = await fetch(base)
  const data =  await request.json()
  return data

}
const currentdata = new Date()
const hour = currentdata.getHours() < 10 ? '0' + currentdata.getHours(): currentdata.getHours()
const minute = currentdata.getMinutes() < 10 ? '0' + currentdata.getMinutes(): currentdata.getMinutes()
const secund = currentdata.getSeconds() < 10 ? '0' + currentdata.getSeconds(): currentdata.getSeconds()

////////
const prayParent = document.querySelector('.nomoz-vaqtlari__card'),
title = document.querySelector('#title'),
UntilPreviusPrayerName = document.querySelector('.prayer_name'),
UntilPreviusPrayerTime = document.querySelectorAll('.prayer__time'),
sahar = document.querySelector('.saharlik'),
iftor = document.querySelector('.iftarlik')

//updateUi
function updateUi(data) {
  let arr = []
  arr.push(data)
  console.log(arr[0].valueOf());
title.textContent = `${arr[0].region} , ${arr[0].date},  ${arr[0].weekday}`
sahar.textContent = arr[0].times.tong_saharlik
iftor.textContent = arr[0].times.shom_iftor
// UntilPreviusPrayerName.textContent = arr[0]

  arr.forEach(items => {
   
    prayParent.innerHTML +=`
    
    <div class="nomoz-vaqtlari__card--items active">
    <div>
      <p>bomdod</p>
    </div>
    <div>
      <i class="fa-regular fa-clock"></i>
      <p>${items.times.tong_saharlik}</p>    
    </div>
  </div>
  <div class="nomoz-vaqtlari__card--items">
    <div>
      <p>quyosh</p>
    </div>
    <div>
      <i class="fa-regular fa-clock"></i>
      <p>${items.times.quyosh}</p>    
    </div>
  </div>
  <div class="nomoz-vaqtlari__card--items">
    <div>
      <p>peshin</p>
    </div>
    <div>
      <i class="fa-regular fa-clock"></i>
      <p>${items.times.peshin}</p>    
    </div>
  </div>
  <div class="nomoz-vaqtlari__card--items">
    <div>
      <p>asr</p>
    </div>
    <div>
      <i class="fa-regular fa-clock"></i>
      <p>${items.times.asr}</p>    
    </div>
  </div>
  <div class="nomoz-vaqtlari__card--items">
    <div>
      <p>shom</p>
    </div>
    <div>
      <i class="fa-regular fa-clock"></i>
      <p>${items.times.shom_iftor}</p>    
    </div>
  </div>
  <div class="nomoz-vaqtlari__card--items">
    <div>
      <p>hufton</p>
    </div>
    <div>
      <i class="fa-regular fa-clock"></i>
      <p>${items.times.hufton}</p>    
    </div>
  </div>


    `
  });
}
getData('Toshkent')
.then((data) => {
  updateUi(data);
})


/* 


          <div class="nomoz-vaqtlari__card--items active">
            <div>
              <p>bomdod</p>
            </div>
            <div>
              <i class="fa-regular fa-clock"></i>
              <p> 21:00</p>    
            </div>
          </div>
          <div class="nomoz-vaqtlari__card--items">
            <div>
              <p>quyosh</p>
            </div>
            <div>
              <i class="fa-regular fa-clock"></i>
              <p> 21:00</p>    
            </div>
          </div>
          <div class="nomoz-vaqtlari__card--items">
            <div>
              <p>peshin</p>
            </div>
            <div>
              <i class="fa-regular fa-clock"></i>
              <p>1:00</p>    
            </div>
          </div>
          <div class="nomoz-vaqtlari__card--items">
            <div>
              <p>asr</p>
            </div>
            <div>
              <i class="fa-regular fa-clock"></i>
              <p> 21:00</p>    
            </div>
          </div>
          <div class="nomoz-vaqtlari__card--items">
            <div>
              <p>shom</p>
            </div>
            <div>
              <i class="fa-regular fa-clock"></i>
              <p> 21:00</p>    
            </div>
          </div>
          <div class="nomoz-vaqtlari__card--items">
            <div>
              <p>hufton</p>
            </div>
            <div>
              <i class="fa-regular fa-clock"></i>
              <p> 21:00</p>    
            </div>
          </div>


*/

const input = document.querySelector('#input'),
form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputvalue = input.value
  form.reset()
  getData(inputvalue)
.then((data) => {
  updateUi(data);
})

})

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
prayParent.innerHTML = ''
  arr.forEach(items => {   
    prayParent.innerHTML +=`
<h3 id="title">${items.region} , ${items.date},  ${items.weekday}</h3> 
<section class="ramadan">
<div class="sahar">
  <p>sahar</p>
  <p class="saharlik">${items.times.tong_saharlik}</p>
</div>
<div>
</div>
<div class="iftar">
  <p>Iftar</p>
  <p class="iftarlik">${items.times.shom_iftor}</p>
</div>
</section>  

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

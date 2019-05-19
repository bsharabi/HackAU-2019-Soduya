function loadStart(){
			let str=`
			<div id="bg">
						
						<div id ="img"></div>
						<div class="module">
										<select class="tab" id="activ" ></select>
										<select class="tab" id="floor"></select>
										<select class="tab" id="date"></select>
										<select class="tab" id="time"></select>
										<input type="button" value="מצא מקום" class="button" />
								</div>
						
						
		</div>`
		document.getElementById("start").innerHTML=str;
		axios.get("http://universities.hipolabs.com/search?country=israel",{withCredentials:true})
		.then(({data})=>{
			loadUniversities(data);
		})
}
function loadUniversities(arr) {

	let str = `<option>בחר אוניברסיטה</option>`;
	for (let i = 0; i < arr.length; i++) {
		str += `<option value=${arr[i].name}>${arr[i].name}</option>`
			;
	}
	document.getElementById("activ").innerHTML = str;

	SetDate();
	SetTime();
	SetFloor();
	nextPic();
	// document.getElementById("activ").addEventListener("change", )

}
function SetDate() {
	let cnt = 0;
	let d = new Date();
	let date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
	let day = `<option>בחר תאריך</option>`;
	var Day = { "1": "ראשון", "2": "שני", "3": "שלישי", "4": "רביעי", "5": "חמישי", "6": "שישי", "7": "סגור" };
	for (let i = d.getDay() + 1; i < 7; i++) {
		date = (d.getDate() + cnt++) + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
		day += `<option value=${Day[d.getDay() + i] + " " + date}>${Day[d.getDay() + i] + " " + date}</option>`;
	}
	document.getElementById("date").innerHTML = day;

}
function SetTime() {
	let Hours;
	str = `<option value=${"בחר שעה"}>${"בחר שעה"}</option>`;
	let d = new Date();
	if (d.getMinutes() > 45)
		Hours = d.getHours() + 1
	else
		Hours = d.getHours()
	console.log(Hours)
	for (i = Hours; i < 24; i++) {
		str += `<option value=${i + ':00'}>${i + ':00'}</option>`
			;
	}
	document.getElementById("time").innerHTML = str;

}
function SetFloor() {
	let str = `<option value=${"בחר קומה"}>${"בחר קומה"}</option>`;
	for (let i = 0; i < 3; i++) {
		str += `<option value=${"קומה " + i}>${"קומה " + i}</option>`
			;
	}
	document.getElementById("floor").innerHTML = str;
}
<<<<<<< HEAD
=======


const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://library-87e60.firebaseio.com/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

var newChair={};
function addChair() {
	newChair = {
			"activ": document.getElementById("activ").value,
			"floor": document.getElementById("floor").value,
			"date": document.getElementById("date").value,
			"time": document.getElementById("time").value,
	};
}

axios.post('https://library-87e60.firebaseio.com/', {
  newChair
})
.then(function (response) {
	console.log(response);
})
.catch(function (error) {
	console.log(error);
});
>>>>>>> dc7480fbdcd659d826c33536a966f1c7046ab58d

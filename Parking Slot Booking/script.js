let totalSlots = 10
let parkingLot = document.getElementById("parkingLot")
let parkingData = JSON.parse(localStorage.getItem("parkingData")) || []
let historyData = JSON.parse(localStorage.getItem("historyData")) || []

if(parkingData.length === 0){
for(let i=0;i<totalSlots;i++){
parkingData.push(null)
}
}

createSlots()
updateDashboard()
loadHistory()

function createSlots(){

parkingLot.innerHTML=""

for(let i=0;i<totalSlots;i++){

let slot=document.createElement("div")
slot.className="slot"

if(parkingData[i]){

slot.classList.add("occupied")
slot.innerHTML="Slot "+(i+1)+"<br>"+parkingData[i].car

slot.onclick=function(){
removeCar(i)
}

}else{

slot.innerHTML="Slot "+(i+1)

}

parkingLot.appendChild(slot)

}

}

function parkCar(){

let car=document.getElementById("carNumber").value.toUpperCase()

let regex=/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/

if(!regex.test(car)){

alert("Invalid Car Number Format")

return

}

for(let i=0;i<totalSlots;i++){

if(parkingData[i]==null){

parkingData[i]={

car:car,
entry:new Date()

}

saveData()

createSlots()

updateDashboard()

document.getElementById("carNumber").value=""

return

}

}

alert("Parking Full")

}

function removeCar(index){

let exitTime=new Date()

let entryTime=new Date(parkingData[index].entry)

let hours=Math.ceil((exitTime-entryTime)/(1000*60*60))

let fee=20+(hours-1)*10

if(hours<=1) fee=20

historyData.push({

car:parkingData[index].car,
entry:entryTime.toLocaleTimeString(),
exit:exitTime.toLocaleTimeString(),
fee:"₹"+fee

})

parkingData[index]=null

saveData()

createSlots()

updateDashboard()

loadHistory()

}

function updateDashboard(){

let occupied=parkingData.filter(x=>x!=null).length

document.getElementById("available").textContent=totalSlots-occupied
document.getElementById("occupied").textContent=occupied

}

function loadHistory(){

let table=document.getElementById("history")

table.innerHTML=""

historyData.forEach(data=>{

let row=document.createElement("tr")

row.innerHTML=`
<td>${data.car}</td>
<td>${data.entry}</td>
<td>${data.exit}</td>
<td>${data.fee}</td>
`

table.appendChild(row)

})

}

function saveData(){

localStorage.setItem("parkingData",JSON.stringify(parkingData))
localStorage.setItem("historyData",JSON.stringify(historyData))

}
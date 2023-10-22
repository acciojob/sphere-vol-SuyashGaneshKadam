function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value;
	let volumeElement = document.getElementById("volume");
	let volume = 4/3 * 22/7 * Math.pow(radius,3);
	volumeElement.value = volume;
} 
// let submit = document.getElementById("submit");
// submit.addEventListener("click", volume_sphere());
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
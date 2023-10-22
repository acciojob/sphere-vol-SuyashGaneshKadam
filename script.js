function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value;
	let volumeElement = document.getElementById("volume");
	let volume = parseInt(4/3) * parseInt(22/7) * Math.pow(radius,3);
	volumeElement.value = volume;
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

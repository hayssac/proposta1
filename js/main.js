// Para o modal
var modal = document.getElementById('modalLogin');
var btn = document.getElementById("loginLink");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Para scroll
function rolarAteApresentacao() {
	window.scrollTo(0, 710);
}

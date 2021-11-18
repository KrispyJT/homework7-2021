
// we can do it this way or other ways?

var video = document.querySelector('#player1');

// var video = document.querySelector('#pause')
// var video = document.querySelector('#volume')



window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector('#play').addEventListener("click", function() {
	video.play();
	volume.innerHTML = "100%";
	console.log('Play Video');
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");

});

document.querySelector("#slower").addEventListener("click", function() { 
	video.playbackRate *=.95;
	console.log("Slower" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() { 
	video.playbackRate /=.95;
	console.log("Faster" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - .15){
		video.currentTime += .15;
}
	else {
		video.currentTime = 0;
		console.log("going back to start");
	}
		video.play();
		console.log(video.duration);
		console.log("currentLocation"+video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.innerHTML="Mute";
} else {
	video.muted = true;
	this.innerHTML="Unmute";
}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	volume.innerHTML = this.value + "%";
	console.log(this.value);
	console.log(video.volume);
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});





// window.addEventListener('click', function() {
// 	console.log('pause button')
// });

// document.querySelector("#play")
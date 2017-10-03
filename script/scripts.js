//Javascript codes here!
//Author: Pinheiro Samuel

(function(){

	//handles 
	var skills = document.getElementById('skill');
	var descSkil = document.getElementById('desc-6');
	descSkil.style.display = 'none';
	skills.onclick = function(){
		skills.style.display = 'none';
		descSkil.style.display = 'block';
	}

	// handles 
	var title = document.getElementById('education');
	var details = document.getElementById('desc-1');
	details.style.display = 'none';
	title.onclick = function(){
		title.style.display = 'none';
		details.style.display = 'block';
	}

	//handles 
	var exp = document.getElementById('experience');
	var desc2 = document.getElementById('desc-2');
	desc2.style.display = 'none';
	exp.onclick = function(){
		exp.style.display = 'none';
		desc2.style.display = 'block';
	}

	//handles 
	var profile = document.getElementById('profile');
	var desc3 = document.getElementById('desc-3');
	desc3.style.display = 'none';
	profile.onclick = function(){
		profile.style.display = 'none';
		desc3.style.display = 'block';
	}

	//handles 
	var awards = document.getElementById('awards');
	var desc4 = document.getElementById('desc-4');
	desc4.style.display = 'none';
	awards.onclick = function(){
		awards.style.display = 'none';
		desc4.style.display = 'block';
	}

	
})();
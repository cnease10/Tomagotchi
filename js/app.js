alert('Please enter a name, then hit the Just START Swiming button to begin');
$('#playGame').on('click', () => {
dory.nameIt();
dory.setAgeInterval();
dory.setHungerInterval();
dory.setSleepyInterval();
dory.setBoredInterval();
dory.agingTomo();


//dory.deadTomo();
});

$('#feed').on('click', () => {
dory.feed();
});

$('#lights').on('click', () => {
dory.sleepyTime();
});

$('#play').on('click', () => {
dory.play();
});

class Tomo {
	
		hunger = 0;
		sleepiness = 0;
		boredom = 0;
		age = 0;


	setHungerInterval() {
		const $hunger = $('#hungry');

		const interval = setInterval(() => {

			if (this.hunger === 10) {
			alert('Hunger has reached deadly levels! To replay, please refresh the broswer.');
			clearInterval(interval);
			//this.boredom = 0;
			// this.hunger = 0;
			// this.sleepiness =0;
			//this.age =0;

			} else {
				this.hunger++
			}

		$hunger.text(`Hunger: ${this.hunger}`)
			
		}, 3500)
		
	}
	setSleepyInterval() {
		const $sleepy = $('#sleepy');

		const interval = setInterval(() => {

			if (this.sleepiness === 10) {
			alert('Sleepiness has reached deadly levels! To replay, please refresh the broswer.');
			clearInterval(interval);
			// this.boredom = 0;
			//this.hunger = 0;
			//this.sleepiness =0;
			//this.age = 0;

			} else {
				this.sleepiness++
			}

		$sleepy.text(`Sleepiness: ${this.sleepiness}`)
			
		}, 4500)

	}

	setBoredInterval() {
		const $bored = $('#bored');

		const interval = setInterval(() => {

			if (this.boredom === 10) {
			alert('Boredom has reached deadly levels! To replay, please refresh the broswer.');
			clearInterval(interval);
			//this.boredom = 0;
			//this.hunger = 0;
			//this.sleepiness =0;
			//this.age =0;

			} else {
				this.boredom++
			}

		$bored.text(`Boredom: ${this.boredom}`)
			
		}, 3000)
	}

	setAgeInterval() {

		const interval = setInterval(() => {

		const $age = $('#age');

			if (this.age === 12) {
				alert('CONGRATULATIONS! You have reached a fully aged Tomagotchi! Please refresh the browser to play again.')
				clearInterval(interval);
				// this.boredom = 0;
				// this.hunger = 0;
				// this.sleepiness =0;
			} else {
				this.getPics();
				this.age++
			}


		$age.text(`Age: ${this.age}`)

			
		}, 3000)
		
	}
	// picOne() {
		getPics() {
			console.log('hi');
			 if (this.age == 0) {
			const img1 = $('<img/>'); 
			img1.attr('id', 'babyDory');
			img1.attr('src', 'http://clipartmag.com/image/nemo-and-dory-drawing-7.jpg');
			img1.css('width', '300px');
			img1.css('height, 300px');
			$('.tomoContainer').append(img1);

		} else if (this.age == 6) {
			$('.tomoContainer').empty();
			const $name = $('#name').val();
			const $h1 = $('<h1/>');
			$h1.text(`${$name} has morphed!`)
			$('.tomoContainer').append($h1);
			const img = $('<img/>');
			img.attr('src', 'https://vignette.wikia.nocookie.net/ideas/images/e/ef/Dory-FN.png/revision/latest/scale-to-width-down/220?cb=20140706202825');
			$('.tomoContainer').append(img);
		}

	}
		

	feed(){
		$('#hunger').text(`Hunger: ${this.hunger -= 1}`)

	}
	sleepyTime(){
		$('#sleepy').text(`Sleepiness: ${this.sleepiness -= 1}`)
	}
	play(){
		$('#bored').text(`Boredom: ${this.boredom -= 1}`)

	}
	nameIt() {
		const $name = $('#name').val();
		const $h2 = $('<h2/>');
		console.log($name);
		const $h1 = $('<h1/>');
		$h1.text(`${$name} is hatching!`);
		$('.tomoContainer').append($h1);
		if (this.age == 1) {
			$h1.text(`${$name} is here!`);
			$('.tomoContainer').append($h1);
		}


	}
	agingTomo() {
		$('#age').text(`Age: ${this.age}`)
	}
	
	// deadTomo() {
	// 	if (this.hunger === 10) {
	// 		alert('Hunger has reached deadly levels!');
	// 		$('.tomoContainer').remove();
	// 	} else if (this.sleepiness === 10) {
	// 		alert('Sleepiness has reached deadly levels!');
	// 		$('.tomoContainer').remove();
	// 	} else if (this.boredom === 10) {
	// 		alert('Boredom has reached deadly levels!');
	// 		$('.tomoContainer').remove();
	// 	}
	// }
};


//animations with jQuery?




const dory = new Tomo ();

console.log(dory);




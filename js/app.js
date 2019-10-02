//alert('Please enter a name, then hit PLAY BALL button to begin');
$('#playGame').on('click', () => {
dory.createTomo();
dory.nameIt();
dory.setHungerInterval();
dory.setSleepyInterval();
});

$('#feed').on('click', () => {
dory.feed();
});

$('#lights').on('click', () => {
dory.sleepyTime();
});

$('#play').on('click', () => {
//first.createTomo();
});

// const $sleepy = $('#sleepy');
// 		const $bored = $('#bored');
// 		const $age = $('#age');

// 		const interval = 

class Tomo {
//hunger, sleepiness, boredom, age

//this.hunger = hunger;
		//this.sleepiness = sleepiness;
		//this.boredom = boredom;
		//this.age = age;
	constructor() {
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;

	}

	setHungerInterval() {
		const $hunger = $('#hungry');

		const interval = setInterval(() => {

			if (this.hunger == 10) {
			clearInterval(interval);

			} else {
				this.hunger++
			}

		$hunger.text(`Hunger: ${this.hunger}`)
			
		}, 2500)
		
	}
	setSleepyInterval() {
		const $sleepy = $('#sleepy');

		const interval = setInterval(() => {

			if (this.sleepiness == 10) {
			clearInterval(interval);

			} else {
				this.sleepiness++
			}

		$sleepy.text(`Sleepiness: ${this.sleepiness}`)
			
		}, 3500)
		
	}
	createTomo() {
		if (this.age < 6) {
			let img = $('<img/>'); 
			img.attr('src', 'http://clipartmag.com/image/nemo-and-dory-drawing-7.jpg');
			img.css('width', '300px');
			img.css('height, 300px');
			$('.tomoContainer').append(img);
		} else if (this.age >= 6) {
			let img = $('<img/>'); 
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

	}
	nameIt() {
		const $name = $('#name').text();
		$('.tomoContainer').append($name);

	}
	
	deadTomo() {
		if (this.hunger == 10) {
			alert('Hunger has reached deadly levels!');
			$('.tomoContainer').remove();
		} else if (this.sleepiness == 10) {
			alert('Sleepiness has reached deadly levels!');
			$('.tomoContainer').remove();
		} else if (this.boredom == 10) {
			alert('Boredom has reached deadly levels!');
			$('.tomoContainer').remove();
		}
	}
};


	



const dory = new Tomo ();
console.log(dory);




alert('Please enter a name, then hit the Just START Swiming button to begin');

$('#playGame').on('click', () => {
	dory.nameIt();
	dory.setAgeInterval();
	dory.setHungerInterval();
	dory.setSleepyInterval();
	dory.setBoredInterval();
	dory.agingTomo();
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

	nameIt() {
		const $name = $('#name').val();
		console.log($name);
		const $h1 = $('<h1/>');
		$h1.text(`${$name} here in 3,2,1!`);
		$h1.css('color', 'white');
		$('.tomoContainer').append($h1);

	}

	setHungerInterval() {
		const $hunger = $('#hungry');

		const interval = setInterval(() => {

			if (this.hunger === 10) {
				alert('Hunger has reached deadly levels!');
				clearInterval(interval);
				location.reload();

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
				alert('Sleepiness has reached deadly levels!');
				clearInterval(interval);
				location.reload();
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
				alert('Boredom has reached deadly levels! ');
				clearInterval(interval);
				location.reload();
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

			if (this.age === 16) {
				alert('CONGRATULATIONS! You have reached a fully aged Tomagotchi! Please refresh the browser to play again.')
				clearInterval(interval);
				location.reload();
			} else {
				this.getPics();
				this.age++
			}


		$age.text(`Age: ${this.age}`)

			
		}, 3000)
		
	}
		getPics() {
			console.log('hi');
			 if (this.age == 0) {
				const img = $('<img/>'); 
				img.addClass('fishPic');
				img.attr('src', 'http://hyveephoto.com/images250_/dori-png-11.png');
				img.css('width', '200px');
				img.css('height, 200px');
			 	$('.tomoContainer').append(img);
   			
   			
		} else if (this.age == 6) {
				$('.tomoContainer').empty();
				const $name = $('#name').val();
				const $h1 = $('<h1/>');
				$h1.text(`${$name} has morphed!`)
				$h1.css('color', 'white')
				$('.tomoContainer').append($h1);
				const img = $('<img/>');
				img.addClass('fishPic');
				img.attr('src', 'https://www.stickpng.com/assets/thumbs/58f37952a4fa116215a9241f.png');
				img.css('height', '250px');
				img.css('width', '250px');	
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
	agingTomo() {
		$('#age').text(`Age: ${this.age}`)
	}
	
};


//animations with jQuery?

const dory = new Tomo ();

console.log(dory);




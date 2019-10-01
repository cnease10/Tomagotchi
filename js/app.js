class Tomo {
	constructor(hunger, sleepiness, boredom, age) {
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
	}
};
const game = {

	createTomo() {
		let img = $('<img/>'); 
		img.attr('src', 'https://vignette.wikia.nocookie.net/ideas/images/e/ef/Dory-FN.png/revision/latest/scale-to-width-down/220?cb=20140706202825');
		$('.tomoContainer').append(img);
	},
	feed(){

	},
	sleepyTime(){

	},
	play(){

	},
	nameIt() {

	},
	morphism() {

	},
};


const first = new Tomo(0, 0, 0, 1);
game.createTomo();

console.log(first);

<template>
	<div id="app" class="container">
		<Carousel>
			<Carousel-slide v-for="slide in nbSlide" :key="slide" :index="slide - 1"></Carousel-slide>
			<div class="settings">
				<div class="setting" @click="openSettings($event)">
					<SettingSvg></SettingSvg>
				</div>
				<div class="actions">
					<div class="plus" @click="addSlide()">
						<PlusSvg></PlusSvg>
					</div>
					<div class="minus" @click="deleteSlide()">
						<MinusSvg></MinusSvg>
					</div>
				</div>
			</div>
		</Carousel>
	</div>
</template>

<script>
import Carousel from './components/Carousel/Carousel';
import CarouselSlide from './components/Carousel/CarouselSlide';
import SettingSvg from './assets/settings-icon.svg';
import PlusSvg from './assets/plus-icon.svg';
import MinusSvg from './assets/minus-icon.svg';

export default {
	name: 'App',
	components: {
		Carousel,
		CarouselSlide,
		SettingSvg,
		PlusSvg,
		MinusSvg,
	},
	data() {
		return {
			nbSlide: 3,
		};
	},
	methods: {
		openSettings(event) {
			const parent = event.target;

			if (!parent) return;

			const actions = parent.nextSibling;

			if (!actions) return;

			actions.classList.toggle('open');
		},
		addSlide() {
			if (this.nbSlide < 10) {
				this.nbSlide++;
			}
		},
		deleteSlide() {
			if (this.nbSlide > 1) {
				this.nbSlide--;
			}
		},
	},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

$break-large: 1210px;
$break-medium: 1024px;
$break-tablet: 768px;
$break-small: 500px;

body {
	height: 100vh;
	margin: 0;
	padding: 0;
	font-family: 'Roboto';
	background-color: #f3f3f3;

	@media screen and (max-width: $break-medium) {
		height: 80vh;
	}

	@media screen and (max-width: $break-tablet) {
		height: 70vh;
	}
}
#app {
	height: 100%;
	display: flex;
	justify-content: center;
	align-content: center;
}

.container {
	max-width: 1200px;
	width: 100%;
	margin: auto;

	@media screen and (max-width: $break-large) {
		max-width: 100%;
		width: 90%;
	}

	@media screen and (max-width: $break-medium) {
		width: 95%;
	}

	@media screen and (max-width: $break-small) {
		padding: 0 10px;
	}
}
</style>

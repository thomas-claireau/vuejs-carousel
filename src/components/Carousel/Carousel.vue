<template>
	<div>
		<div class="title">
			<img src="../../assets/logo.png" alt="Logo" />
			<h1>VueJS - Slider</h1>
		</div>
		<div>
			<div class="control prev" @click="prev()">
				<img src="../../assets/chevron.png" alt="prev-icon" />
			</div>
			<div class="carousel-slides">
				<slot></slot>
			</div>
			<div class="control next" @click="next()">
				<img src="../../assets/chevron.png" alt="next-icon" />
			</div>
			<div class="dots">
				<span v-for="(slide, i) in slides" :key="i" :class="{ active: i == index}" @click="go(i)"></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			index: 0,
			slides: [],
			direction: null,
		};
	},
	methods: {
		prev() {
			if (this.index <= 0) {
				this.index = this.nbSlides;
			} else {
				this.index--;
			}

			this.direction = 'left';
		},
		next() {
			if (this.index >= this.nbSlides) {
				this.index = 0;
			} else {
				this.index++;
			}

			this.direction = 'right';
		},
		go(index) {
			if (index > this.index) {
				this.direction = 'right';
			} else {
				this.direction = 'left';
			}

			this.index = index;
		},
		addSlide() {
			console.log(this.$parent);
		},
	},
	computed: {
		nbSlides() {
			return this.slides.length - 1;
		},
	},
	mounted() {
		this.slides = this.$children;
	},
};
</script>

<style lang="scss">
$break-header: 1300px;
$break-large: 1210px;
$break-medium: 1024px;
$break-tablet: 768px;
$break-small: 500px;

div {
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	margin: auto;

	h1 {
		font-size: 35px;
		color: #707070;
	}

	> div {
		position: relative;
		text-align: center;
	}

	img {
		max-width: 100px;
		width: 100%;
		margin: auto;
	}

	.control {
		width: 28px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		z-index: 1;

		@media screen and (max-width: $break-medium) {
			top: auto;
			bottom: -70px;
			transform: translateY(0);
		}

		&.prev {
			left: -5%;

			@media screen and (max-width: $break-header) {
				left: 5%;
			}

			@media screen and (max-width: $break-medium) {
				left: 40%;
			}

			@media screen and (max-width: $break-small) {
				left: 30%;
			}
		}

		&.next {
			right: -5%;
			transform: translateY(-50%) rotate(180deg);

			@media screen and (max-width: $break-header) {
				right: 5%;
			}

			@media screen and (max-width: $break-medium) {
				right: 40%;
				bottom: -66px;
				transform: rotate(180deg);
			}

			@media screen and (max-width: $break-small) {
				right: 30%;
			}
		}
	}

	.carousel-slides {
		position: relative;
		overflow: hidden;

		@media screen and (max-width: $break-header) {
			max-width: 70%;
		}

		@media screen and (max-width: $break-medium) {
			max-width: 95%;
		}

		.settings {
			position: absolute;
			top: 50px;
			right: 30px;
			display: flex;
			justify-content: center;
			flex-direction: row-reverse;
			align-items: center;
			z-index: 10;

			.setting {
				width: 24px;
				cursor: pointer;

				> svg {
					pointer-events: none;
				}
			}

			.actions {
				flex-direction: row-reverse;
				transform: translateX(1000px);
				transition: all 0.3s ease-in-out;

				> div {
					opacity: 0;
					transition: all 0.3s ease-in-out;
				}

				&.open {
					transform: translateX(0);
					transition: all 0.3s ease-in-out;

					> div {
						opacity: 1;
						transition: all 0.3s ease-in-out;
					}
				}

				> div {
					width: 28px;
					height: 28px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #41b783;
					margin-right: 20px;
					border-radius: 50px;
					cursor: pointer;

					&.plus {
						background-color: #41b783;
					}

					&.minus {
						background-color: #d5212e;
					}
				}
			}
		}
	}

	.dots {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		position: absolute;
		bottom: 60px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;

		span {
			width: 10px;
			height: 10px;
			background-color: #fff;
			box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.08);
			border-radius: 50px;
			transition: all 0.3s ease-in-out;

			@media screen and (max-width: $break-small) {
				width: 8px;
				height: 8px;
			}

			&.active {
				width: 15px;
				height: 15px;
				transition: all 0.3s ease-in-out;
				background-color: #41b883;

				@media screen and (max-width: $break-small) {
					width: 12px;
					height: 12px;
				}
			}

			&:not(:first-child) {
				margin-left: 25px;

				@media screen and (max-width: $break-small) {
					margin-left: 15px;
				}
			}
		}
	}
}
</style>
<template>
	<transition :name="slideTransition">
		<div v-show="visible">
			<img :src="imageLink" alt="slide" />
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		index: { Number, default: 0 },
	},
	computed: {
		imageLink() {
			return 'https://picsum.photos/1920/1080?random=' + this.index;
		},
		visible() {
			return this.index == this.$parent.index;
		},
		slideTransition() {
			return 'slide-' + this.$parent.direction;
		},
	},
};
</script>

<style lang="scss" scoped>
$break-header: 1300px;
$break-large: 1210px;
$break-medium: 1024px;
$break-tablet: 768px;
$break-small: 500px;

div {
	display: flex;
	justify-content: center;
	align-content: center;
	background-size: cover;
	background-position: center;
	position: relative;
	margin: 30px auto;

	&:before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: #000;
		opacity: 0.4;
		z-index: 1;
	}

	img {
		width: 100%;
		max-width: 100%;
		object-fit: cover;
		position: relative;
	}
}

.slide-right-enter-active {
	animation: slideRightIn 0.5s;
}

.slide-right-leave-active {
	animation: slideRightOut 0.5s;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
}

.slide-left-enter-active {
	animation: slideLeftIn 0.5s;
}

.slide-left-leave-active {
	animation: slideLeftOut 0.5s;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
}

@keyframes slideLeftIn {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0);
	}
}

@keyframes slideLeftOut {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(100%);
	}
}

@keyframes slideRightIn {
	from {
		transform: translateX(100%);
	}
	to {
		transform: translateX(0);
	}
}

@keyframes slideRightOut {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-100%);
	}
}
</style>
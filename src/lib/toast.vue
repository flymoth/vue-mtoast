<template>
    <section class="toast-container">
        <div class="toast" :class="[visible?'fade-in':'fade-out']">
            <span v-text="msg"></span>
        </div>
    </section>
</template>

<script>
export default {
	data() {
		return {
			visible: false,
			msg: ''
		}
	}
}
</script>

<style lang="scss">
@keyframes fade-in {
	0% {
		opacity: 0;
		transform: scale(0.7);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}
@keyframes fade-out {
	0% {
		opacity: 1;
		transform: scale(1);
	}
	100% {
		opacity: 0;
		transform: scale(0.7);
	}
}
.toast-container {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
	.toast {
		padding: 0 20px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: white;
		background-color: #000000a6;
		border-radius: 5px;
	}
	.fade-in {
		animation-name: fade-in;
		animation-duration: 0.3s;
		animation-fill-mode: both;
	}
	.fade-out {
		animation-name: fade-out;
		animation-duration: 0.3s;
		animation-fill-mode: both;
	}
}
</style>
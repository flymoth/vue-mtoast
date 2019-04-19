<template>
    <transition name="fade">
        <section class="toast-container">
            <div class="toast">
                <span v-if="type==='error'">✗</span>
                <span v-if="type==='success'">✓</span>
                <span v-text="msg"></span>
            </div>
        </section>
    </transition>
</template>

<script>
export default {
	data() {
		return {
			type: "",
			msg: ""
		}
	}
}
</script>

<style lang="scss">
.fade-enter-active {
	animation: fade-in 0.5s;
}
.fade-leave-active {
	animation: fade-in 0.5s reverse;
}
@keyframes fade-in {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 0.5;
	}
	100% {
		opacity: 1;
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
}
</style>
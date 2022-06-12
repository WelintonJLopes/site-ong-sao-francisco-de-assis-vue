<template>
	<v-app-bar app elevation="0" color="white" height="85px">
		<v-container>
			<v-layout wrap row align-center>
				<v-img src="@/assets/logo.png" max-width="55px" class="mr-5"></v-img>
				<v-btn text rounded @click="$vuetify.goTo(target, options)">Finais felizes</v-btn>
				<v-btn text rounded>Adote aqui</v-btn>
				<v-btn text rounded>Como ajudar</v-btn>
				<v-btn text rounded>Dicas</v-btn>
				<v-btn text rounded to="/#about">Quem somos</v-btn>
				<v-spacer />
			</v-layout>
		</v-container>
	</v-app-bar>
</template>

<script>
import * as easings from "vuetify/lib/services/goto/easing-patterns";
export default {
	name: "Header",
	data() {
		return {
			number: 9999,
			duration: 1500,
			offset: 0,
			easing: "easeInOutCubic",
			easings: Object.keys(easings),
		};
	},
	computed: {
		target() {
			return this.number;
		},
		options() {
			return {
				duration: this.duration,
				offset: this.offset,
				easing: this.easing,
			};
		},
	},
};
</script>

<style>
</style>
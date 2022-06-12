<template>
	<v-app>
		<Header />
		<Home />
	</v-app>
</template>

<script>
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

export default {
	name: "App",
	components: { Header, Home },
	data: () => ({}),
};
</script>

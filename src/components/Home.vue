<template>
	<v-main>
		<v-app-bar app elevation="0" color="white" height="85px">
			<v-container>
				<v-layout wrap row align-center>
					<v-btn text fab large class="mr-5" @click="alvo = 'inicio', $vuetify.goTo(target, options)">
						<v-img src="@/assets/logo.png" max-width="55px" class="text-center"></v-img>
					</v-btn>
					<v-btn text rounded @click="alvo = 'finais', $vuetify.goTo(target, options)">Finais felizes</v-btn>
					<v-btn text rounded @click="alvo = 'adotar', $vuetify.goTo(target, options)">Adote aqui</v-btn>
					<v-btn text rounded @click="alvo = 'ajudar', $vuetify.goTo(target, options)">Como ajudar</v-btn>
					<v-btn text rounded @click="alvo = 'sobre', $vuetify.goTo(target, options)">Quem somos</v-btn>
					<v-spacer />
				</v-layout>
			</v-container>
		</v-app-bar>
		<v-container>
			<v-row>
				<v-col cols="6">
					<v-card flat color="transparent" height="80vh">
						<span ref="inicio" />
						<v-row align-content="space-between" class="full-height">
							<v-col cols="12">
								<v-row>
									<v-col cols="12" class="title-card font-weight-bold mt-5">Doe amor adotando um pet 🐶</v-col>
									<v-col
										cols="12"
										class="subtitle-card font-weight-bold"
									>Suspendisse ac diam dapibus, vestibulum nibh nec, vulputate dui.</v-col>
								</v-row>
							</v-col>
							<v-col cols="auto">
								<v-sheet color="black" class="rounded-pill pa-1">
									<v-btn color="primary" rounded x-large>
										Quero adotar
										<v-sheet color="secondary" class="rounded-pill ml-3">
											<v-icon color="black" class="font-weight-bold">mdi-chevron-right</v-icon>
										</v-sheet>
									</v-btn>
								</v-sheet>
							</v-col>
							<v-col cols="auto">
								<v-sheet color="transparent" class="rounded-pill pa-1">
									<v-btn text x-large rounded class="font-weight-bold">Quero ajudar</v-btn>
								</v-sheet>
							</v-col>
							<v-col cols="12">
								<v-btn fab elevation="0" color="transparent" class="mr-5">
									<v-icon size="60">mdi-facebook</v-icon>
								</v-btn>
								<v-btn fab elevation="0" color="transparent">
									<v-icon size="60">mdi-instagram</v-icon>
								</v-btn>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
				<v-col cols="12" class="text-center">
					<v-btn
						height="40"
						color="secondary"
						elevation="0"
						class="rounded-t-pill"
						@click="alvo = 'finais', $vuetify.goTo(target, options)"
					>
						<v-icon size="30" color="black" class="font-weight-bold mb-n3">mdi-chevron-down</v-icon>
					</v-btn>
				</v-col>
				<v-col cols="5">
					<span ref="finais" />
					<v-card flat color="transparent" height="87vh">
						<v-row align-content="space-between" class="full-height">
							<v-col cols="12">
								<v-row>
									<v-col cols="12" class="title-card font-weight-bold">Alguns de nossos finais felizes! 😁</v-col>
									<v-col cols="12" class="subtitle-card font-weight-bold">
										Porque amor não se compra, se
										<strong>adota!</strong>
									</v-col>
								</v-row>
							</v-col>
							<v-col cols="4" class="text-center font-weight-bold">
								<span class="highlight-card font-weight-bold">+200</span>
								<br />Animais com um novo lar! 🏡
							</v-col>
							<v-col cols="4" class="text-center font-weight-bold">
								<span class="highlight-card">+250</span>
								<br />Animais resgatados! 🐱
							</v-col>
							<v-col cols="12">
								<v-btn fab elevation="0" color="transparent" class="mr-5">
									<v-icon size="60">mdi-facebook</v-icon>
								</v-btn>
								<v-btn fab elevation="0" color="transparent">
									<v-icon size="60">mdi-instagram</v-icon>
								</v-btn>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
				<v-col cols="7">
					<v-row class="full-height" justify="center" align-content="center">
						<v-col cols="4">
							<v-card elevation="6" class="rounded-xl pa-1">
								<v-img src="@/assets/ff_01.png" class="rounded-xl"></v-img>
								<v-card-actions>
									<v-icon color="primary">mdi-cards-heart</v-icon>
									<v-icon class="mx-2">mdi-android-messages</v-icon>
									<v-icon>mdi-navigation-variant-outline</v-icon>
								</v-card-actions>
							</v-card>
						</v-col>
						<v-col cols="4">
							<v-card elevation="6" class="rounded-xl pa-1">
								<v-img src="@/assets/ff_02.png" class="rounded-xl"></v-img>
								<v-card-actions>
									<v-icon color="primary">mdi-cards-heart</v-icon>
									<v-icon class="mx-2">mdi-android-messages</v-icon>
									<v-icon>mdi-navigation-variant-outline</v-icon>
								</v-card-actions>
							</v-card>
						</v-col>
						<v-col cols="4">
							<v-card elevation="6" class="rounded-xl pa-1">
								<v-img src="@/assets/ff_03.png" class="rounded-xl"></v-img>
								<v-card-actions>
									<v-icon color="primary">mdi-cards-heart</v-icon>
									<v-icon class="mx-2">mdi-android-messages</v-icon>
									<v-icon>mdi-navigation-variant-outline</v-icon>
								</v-card-actions>
							</v-card>
						</v-col>
						<v-col cols="4">
							<v-card elevation="6" class="rounded-xl pa-1">
								<v-img src="@/assets/ff_04.png" class="rounded-xl"></v-img>
								<v-card-actions>
									<v-icon color="primary">mdi-cards-heart</v-icon>
									<v-icon class="mx-2">mdi-android-messages</v-icon>
									<v-icon>mdi-navigation-variant-outline</v-icon>
								</v-card-actions>
							</v-card>
						</v-col>
						<v-col cols="4">
							<v-card elevation="6" class="rounded-xl pa-1">
								<v-img src="@/assets/ff_05.png" class="rounded-xl"></v-img>
								<v-card-actions>
									<v-icon color="primary">mdi-cards-heart</v-icon>
									<v-icon class="mx-2">mdi-android-messages</v-icon>
									<v-icon>mdi-navigation-variant-outline</v-icon>
								</v-card-actions>
							</v-card>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="7">
					<v-row class="full-height pr-md-3" align-content="space-between">
						<v-col cols="12">
							<v-row justify="center">
								<v-col cols="4">
									<v-card color="#3D3D3D" elevation="6" class="rounded-xl pa-2">
										<v-img src="@/assets/ff_01.png" class="rounded-xl"></v-img>
									</v-card>
								</v-col>
								<v-col cols="4">
									<v-card color="#3D3D3D" elevation="6" class="rounded-xl pa-2">
										<v-img src="@/assets/a_02.png" class="rounded-xl"></v-img>
									</v-card>
								</v-col>
								<v-col cols="4">
									<v-card color="#3D3D3D" elevation="6" class="rounded-xl pa-2">
										<v-img src="@/assets/a_03.png" class="rounded-xl"></v-img>
									</v-card>
								</v-col>
								<v-col cols="4">
									<v-card color="#3D3D3D" elevation="6" class="rounded-xl pa-2">
										<v-img src="@/assets/a_04.png" class="rounded-xl"></v-img>
									</v-card>
								</v-col>
								<v-col cols="4">
									<v-card color="#3D3D3D" elevation="6" class="rounded-xl pa-2">
										<v-img src="@/assets/a_05.png" class="rounded-xl"></v-img>
									</v-card>
								</v-col>
							</v-row>
						</v-col>
						<v-col cols="12">
							<v-btn fab elevation="0" color="transparent" class="mr-3 mr-md-5">
								<v-icon size="60">mdi-facebook</v-icon>
							</v-btn>
							<v-btn fab elevation="0" color="transparent">
								<v-icon size="60">mdi-instagram</v-icon>
							</v-btn>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="5">
					<span ref="adotar" />
					<v-card flat color="transparent" height="87vh" class="pl-5">
						<v-row>
							<v-col cols="12" class="title-card font-weight-bold">Estamos esperando por um lar 🐶</v-col>
							<v-col
								cols="12"
								class="subtitle-card font-weight-bold"
							>E ai, vamos encher sua casa de amor? Quer fazer uma vida feliz?</v-col>
							<v-col cols="auto" class="mt-10">
								<v-sheet color="black" class="rounded-pill pa-1">
									<v-btn color="primary" rounded x-large>
										Quero adotar
										<v-sheet color="secondary" class="rounded-pill ml-3">
											<v-icon color="black" class="font-weight-bold">mdi-chevron-right</v-icon>
										</v-sheet>
									</v-btn>
								</v-sheet>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
				<v-col cols="12">
					<span ref="ajudar" />
					<v-card flat color="transparent" height="87vh">
						<v-row class="py-5">
							<v-col cols="10" class="title-card font-weight-bold">Todos por um objetivo 🎯</v-col>
							<v-col
								cols="10"
								class="text-card mb-10"
							>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac augue ut urna scelerisque pretium. Proin lectus arcu, vehicula eu velit vitae, iaculis pretium ex.</v-col>
							<v-col cols="3" class="text-center font-weight-bold">
								<span class="highlight-card">200</span>
								<br />
								<span class="description-card">Animais</span>
							</v-col>
							<v-col cols="3" class="text-center font-weight-bold">
								<span class="highlight-card">15,000</span>
								<br />
								<span class="description-card">Medicamentos</span>
							</v-col>
							<v-col cols="3" class="text-center font-weight-bold">
								<span class="highlight-card">5,000</span>
								<br />
								<span class="description-card">Estrutura e medicação</span>
							</v-col>
							<v-col cols="3" class="text-center font-weight-bold">
								<span class="highlight-card">15</span>
								<br />
								<span class="description-card">Funcionários</span>
							</v-col>
							<v-col cols="auto" class="mt-10">
								<v-sheet color="black" class="rounded-pill pa-1">
									<v-btn color="primary" rounded x-large>
										Fazer doações
										<v-sheet color="secondary" class="rounded-pill ml-3">
											<v-icon color="black" class="font-weight-bold">mdi-chevron-right</v-icon>
										</v-sheet>
									</v-btn>
								</v-sheet>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
				<v-col cols="12">
					<span ref="sobre" />
					<v-card flat color="transparent" height="87vh">
						<v-row class="text-center full-height" justify="center" align-content="center">
							<v-col cols="8" class="title-card font-weight-bold">Quem somos ?</v-col>
							<v-col
								cols="8"
								class="text-card"
							>Quer conhecer um pouquinho da nossa história e objetivos? Sinta-se em casa! 🏡</v-col>
							<v-col cols="12" />
							<v-col cols="auto">
								<v-sheet color="black" class="rounded-pill pa-1">
									<v-btn color="primary" class="px-10 font-weight-bold" rounded x-large>Saber mais</v-btn>
								</v-sheet>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-main>
</template>

<script>
export default {
	name: "Home",
	data: () => ({
		alvo: "",
	}),
	computed: {
		target() {
			console.log(this.alvo);
			return this.$refs[this.alvo];
		},
		options() {
			return { duration: 1500 };
		},
	},
};
</script>

<style scoped>
.full-height {
	height: 100%;
}
.title-card {
	font-size: 60px;
	line-height: 60px;
}
.subtitle-card {
	font-size: 18px;
	line-height: 18px;
}
.text-card {
	font-size: 32px;
	line-height: 32px;
}
.description-card {
	font-size: 24px;
	line-height: 24px;
}
.highlight-card {
	font-size: 60px;
	line-height: 60px;
}
</style>

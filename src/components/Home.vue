<template>
	<v-main class="pa-0">
		<v-app-bar app elevation="0" color="white" height="85vh" class="d-none d-md-block">
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
		<v-app-bar elevation="0" color="white" height="55px" fixed class="d-block d-md-none">
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" fixed>
			<v-list nav dense>
				<v-list-item-group v-model="group">
					<v-list-item class="py-3">
						<v-list-item-title @click="alvo = 'inicio', $vuetify.goTo(target, options)">
							<v-img src="@/assets/logo.png" max-width="55px" class="mx-auto"></v-img>
						</v-list-item-title>
					</v-list-item>
					<v-divider />
					<v-list-item>
						<v-list-item-title @click="alvo = 'finais', $vuetify.goTo(target, options)">FINAIS FELIZES</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-title @click="alvo = 'adotar', $vuetify.goTo(target, options)">ADOTE AQUI</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-title @click="alvo = 'ajudar', $vuetify.goTo(target, options)">COMO AJUDAR</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-title @click="alvo = 'sobre', $vuetify.goTo(target, options)">QUEM SOMOS</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		<v-container fluid class="pa-0">
			<v-img
				src="@/assets/bg_01.png"
				height="100vh"
				contain
				position="right top"
				class="mt-12 mt-md-15"
			>
				<v-container class="pa-0">
					<v-row class="ma-0">
						<v-col cols="12" md="6">
							<v-card flat color="transparent" height="87vh">
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
												<span class="d-none d-sm-block">Quero</span> adotar
												<v-sheet color="secondary" class="rounded-pill ml-0 ml-sm-3 d-none d-sm-block">
													<v-icon color="black" class="font-weight-bold">mdi-chevron-right</v-icon>
												</v-sheet>
											</v-btn>
										</v-sheet>
									</v-col>
									<v-col cols="auto">
										<v-sheet color="transparent" class="rounded-pill pa-1 d-none d-md-block">
											<v-btn text x-large rounded class="font-weight-bold">
												<span class="d-none d-sm-block">Quero</span> ajudar
											</v-btn>
										</v-sheet>
										<v-sheet color="#FFFFFF80" class="rounded-pill pa-1 d-block d-md-none">
											<v-btn text x-large rounded class="font-weight-bold">
												<span class="d-none d-sm-block">Quero</span> ajudar
											</v-btn>
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
					</v-row>
				</v-container>
			</v-img>
			<v-img src="@/assets/bg_02.png" height="100vh" contain position="right">
				<v-container class="pa-0">
					<v-row class="ma-0">
						<v-col cols="12" sm="5">
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
									<v-col cols="6" md="4" class="text-center font-weight-bold">
										<span class="highlight-card font-weight-bold">+200</span>
										<br />
										<span class="description-card">Animais com um novo lar! 🏡</span>
									</v-col>
									<v-col cols="6" md="4" class="text-center font-weight-bold">
										<span class="highlight-card">+250</span>
										<br />
										<span class="description-card">Animais resgatados! 🐱</span>
									</v-col>
									<v-col cols="12" class="d-block d-sm-none">
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
						<v-col cols="7" class="d-none d-sm-block">
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
					</v-row>
				</v-container>
			</v-img>
			<v-img src="@/assets/bg_03.png" height="100vh" contain position="left">
				<v-container class="pa-0">
					<v-row class="ma-0">
						<v-col cols="7" class="d-none d-sm-block">
							<v-row class="full-height pr-md-3" align-content="space-between">
								<v-col cols="12">
									<v-row justify="center">
										<v-col cols="4">
											<v-card color="#3D3D3D" elevation="6" class="rounded-xl pa-2">
												<v-img src="@/assets/a_01.png" class="rounded-xl"></v-img>
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
						<v-col cols="12" sm="5">
							<span ref="adotar" />
							<v-card flat color="transparent" height="87vh" class="pl-0 pl-sm-5">
								<v-row>
									<v-col cols="12" class="title-card font-weight-bold">Estamos esperando por um lar 🐶</v-col>
									<v-col
										cols="12"
										class="subtitle-card font-weight-bold"
									>E ai, vamos encher sua casa de amor? Quer fazer uma vida feliz?</v-col>
									<v-col cols="12" class="d-block d-sm-none">
										<v-row class="full-height pr-md-3" align-content="space-between">
											<v-col cols="12">
												<v-row justify="center">
													<v-col cols="4">
														<v-card color="#3D3D3D" elevation="6" class="rounded-xl pa-2">
															<v-img src="@/assets/a_01.png" class="rounded-xl"></v-img>
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
									<v-col cols="auto" class="mt-0 mt-sm-10">
										<v-sheet color="black" class="rounded-pill pa-1">
											<v-btn color="primary" rounded x-large>
												Quero adotar
												<v-sheet color="secondary" class="rounded-pill ml-3 d-none d-md-block">
													<v-icon color="black" class="font-weight-bold">mdi-chevron-right</v-icon>
												</v-sheet>
											</v-btn>
										</v-sheet>
									</v-col>
								</v-row>
							</v-card>
						</v-col>
					</v-row>
				</v-container>
			</v-img>
			<v-img src="@/assets/bg_04.png" height="100vh" contain position="right">
				<v-container class="pa-0">
					<v-row class="ma-0">
						<v-col cols="12">
							<span ref="ajudar" />
							<v-card flat color="transparent" height="87vh">
								<v-row class="py-5">
									<v-col cols="12" sm="10" class="title-card font-weight-bold">Todos por um objetivo 🎯</v-col>
									<v-col
										cols="12"
										sm="10"
										class="text-card mb-10"
									>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac augue ut urna scelerisque pretium. Proin lectus arcu, vehicula eu velit vitae, iaculis pretium ex.</v-col>
									<v-col cols="6" sm="3" class="text-center font-weight-bold">
										<span class="highlight-card">200</span>
										<br />
										<span class="description-card">Animais</span>
									</v-col>
									<v-col cols="6" sm="3" class="text-center font-weight-bold">
										<span class="highlight-card">15,000</span>
										<br />
										<span class="description-card">Medicamentos</span>
									</v-col>
									<v-col cols="6" sm="3" class="text-center font-weight-bold">
										<span class="highlight-card">5,000</span>
										<br />
										<span class="description-card">Estrutura e medicação</span>
									</v-col>
									<v-col cols="6" sm="3" class="text-center font-weight-bold">
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
					</v-row>
				</v-container>
			</v-img>
			<v-img src="@/assets/bg_05.png" height="100vh" contain position="left">
				<v-container class="pa-0">
					<v-row class="ma-0">
						<v-col cols="12">
							<span ref="sobre" />
							<v-card flat color="transparent" height="87vh">
								<v-row class="text-center full-height" justify="center" align-content="center">
									<v-col cols="12" sm="8" class="title-card font-weight-bold">Quem somos ?</v-col>
									<v-col
										cols="12"
										sm="8"
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
			</v-img>
		</v-container>
	</v-main>
</template>

<script>
export default {
	name: "Home",
	data: () => ({
		alvo: "",
		drawer: false,
		group: null,
	}),
	computed: {
		target() {
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

@media (max-width: 600px) {
	.title-card {
		font-size: 50px;
		line-height: 50px;
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
		font-size: 20px;
		line-height: 20px;
	}
	.highlight-card {
		font-size: 30px;
		line-height: 30px;
	}
}

@media (max-width: 960px) and (min-width: 600px) {
	.title-card {
		font-size: 30px;
		line-height: 30px;
	}
	.subtitle-card {
		font-size: 14px;
		line-height: 14px;
	}
	.text-card {
		font-size: 24px;
		line-height: 24px;
	}
	.description-card {
		font-size: 14px;
		line-height: 14px;
	}
	.highlight-card {
		font-size: 24px;
		line-height: 24px;
	}
}

@media (max-width: 1264px) and (min-width: 960px) {
	.title-card {
		font-size: 50px;
		line-height: 50px;
	}
	.subtitle-card {
		font-size: 16px;
		line-height: 16px;
	}
	.text-card {
		font-size: 28px;
		line-height: 28px;
	}
	.description-card {
		font-size: 20px;
		line-height: 20px;
	}
	.highlight-card {
		font-size: 40px;
		line-height: 40px;
	}
}

@media (max-width: 1904px) and (min-width: 1264px) {
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
}

@media (min-width: 1904px) {
	.title-card {
		font-size: 90px;
		line-height: 90px;
	}
	.subtitle-card {
		font-size: 40px;
		line-height: 40px;
	}
	.text-card {
		font-size: 60px;
		line-height: 60px;
	}
	.description-card {
		font-size: 50px;
		line-height: 50px;
	}
	.highlight-card {
		font-size: 90px;
		line-height: 90px;
	}
}
</style>

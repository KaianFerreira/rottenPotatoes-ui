<template>
	<section class="modal" v-if="value">
		<div class="modal-content">
			<div class="header">
				<div class="title">
					Login
				</div>
				<div class="close" @click="close">x</div>
			</div>
			<div class="body">
				<div class="form-input">
					<div class="label">User name</div>
					<input type="text" v-model="username">
				</div>
				<div class="form-input">
					<div class="label">Senha</div>
					<input type="password" v-model="password">
				</div>
			</div>
			<div class="actions">
				<button>Cancelar</button>
				<button class="primary" @click="login">Logar</button>
			</div>
		</div>
	</section>
</template>
<script>

import { signin } from '../api/user'
import { useUserStore } from '../stores/user'
export default {
	props: {
		value: Boolean
	},
	data: () => ({
		username: '',
		password: ''
	}),
	methods: {

		close () {
			this.$emit('update:false', false)
		},
		async login() {
			const userStore = useUserStore()
			const validated = await signin(this.username, this.password)
			userStore.setUser(validated)
			this.close()
		}
	}
}
</script>
<style lang="scss">
.modal {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(39, 39, 39, 0.414);
	display: flex;
	justify-content: center;
	align-items: center;

	.modal-content {
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 300px;
		min-width: 600px;
		.header {
			font-weight: bold;
			padding: 1rem;
			border-bottom: 1px solid rgb(205, 205, 205);
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title {
				height: fit-content;
			}
			.close {
				cursor: pointer;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 24px;
				width: 24px;
			}
		}
		.body {
			padding: 1rem;
			box-flex-group: 1;
			display: flex;
			flex-direction: column;
			gap: 12px;
		}
		.actions {
			padding: 1rem;
			display: flex;
			justify-content: flex-end;
			gap: 16px;
			button {
				width: 160px;
				height: 28px;
				border: none;
				border-radius: 4px;
				cursor: pointer;
				&.primary {
					color: white;
					background-color: blue;
				}
			}
		}
	}

	.form-input {
		display: flex;
		flex-direction: column;
		gap: 8px;
		input {
			font-size: 16px;
			outline: none;
		}
	}
}
</style>
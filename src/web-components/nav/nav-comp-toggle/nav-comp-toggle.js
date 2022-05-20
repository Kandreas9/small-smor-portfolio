class NavCompToggle extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		const template = document.createElement('template')
		template.innerHTML = `
		<style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				text-align: center;
			}

			.nav-comp-toggle {
				display: grid;
				place-content: center;
			}

			svg {
				height: 2.5rem;
			}

			.hide {
				display: none;
			}
		</style>
		<div id="nav-comp-toggle" class="nav-comp-toggle">
			<svg
				class="open"
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>

			<svg
				class="close hide"
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</div>
		`

		shadow.appendChild(template.content.cloneNode(true))

		const navCompToggle = this.shadowRoot.querySelector('.nav-comp-toggle')
		const open = this.shadowRoot.querySelector('.open')
		const close = this.shadowRoot.querySelector('.close')

		navCompToggle.addEventListener('click', (e) => {
			navCompToggle.classList.toggle('active')

			if (navCompToggle.classList.contains('active') === true) {
				this.dispatchEvent(new CustomEvent('open-menu', { detail: true }))

				open.classList.add('hide')
				close.classList.remove('hide')
			} else {
				this.dispatchEvent(new CustomEvent('open-menu', { detail: false }))

				open.classList.remove('hide')
				close.classList.add('hide')
			}
		})
	}
}

customElements.define('nav-comp-toggle', NavCompToggle)

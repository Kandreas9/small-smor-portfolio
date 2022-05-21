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
				cursor: pointer;
			}

			svg {
				height: 2.5rem;
			}

			svg:focus {
				stroke: #2e3e64;
				stroke-width: 1px;
			}

			.hide {
				display: none;
			}
		</style>
		<div tabindex='0' id="nav-comp-toggle" class="nav-comp-toggle">
			<svg xmlns="http://www.w3.org/2000/svg" class="open" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
			</svg>

			<svg xmlns="http://www.w3.org/2000/svg" class="close hide" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
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

import '../nav-comp-menu/nav-comp-menu'
import '../nav-comp-toggle/nav-comp-toggle'

class NavComp extends HTMLElement {
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

            nav {
                position: fixed;
                z-index: 10;
                inset: auto 2rem 5vh auto;
                padding: 2rem 1.1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                transition: height 0.4s ease-in-out;
                height: 58px;
            }

            .bigger {
                height: 80vh;
            }

            .glassy {
                background: linear-gradient(
                    70deg,
                    rgba(255, 255, 255, 0.4),
                    rgba(255, 255, 255, 0.2)
                );
                backdrop-filter: blur(2rem);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 2rem;
                box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
            }

            nav-comp-toggle {
                margin-top: auto;
            }

            .hide {
                display: none;
            }

            .fadeIn {
                animation: fade 0.5s linear;
            }

            .fadeOut {
                animation: fade 0.5s reverse;
            }

            @keyframes fade {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        </style>
        <nav id="navigation" class="glassy">
            <nav-comp-menu class="menu hide"></nav-comp-menu>

            <nav-comp-toggle></nav-comp-toggle>
        </nav>
        `

		shadow.appendChild(template.content.cloneNode(true))

		const nav = this.shadowRoot.querySelector('nav')
		const navCompToggle = this.shadowRoot.querySelector('nav-comp-toggle')
		const menu = this.shadowRoot.querySelector('.menu')

		navCompToggle.addEventListener('open-menu', (e) => {
			nav.classList.toggle('bigger')
			let active = e.detail

			if (active) {
				console.log(active)
				removeAddClass(menu, 'fadeOut', 'fadeIn')
				setTimeout(() => {
					menu.classList.toggle('hide')
				}, 250)
			} else if (!active) {
				// removeAddClass(menu, 'fadeIn', 'fadeOut')
				menu.classList.toggle('hide')
			}
		})
	}
}

function removeAddClass(item, remove, add) {
	item.classList.remove(`${remove}`)
	item.classList.add(`${add}`)
}

customElements.define('nav-comp', NavComp)

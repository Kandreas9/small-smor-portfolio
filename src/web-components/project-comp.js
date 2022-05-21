import dynamic from '../images/dynamic-profile-readme.png'
import userAvatar from '../images/user-avatar.png'
import webjamRecap from '../images/webjam-recap.png'
import webjamFlash from '../images/webjam-flash.png'
import webjamTornado from '../images/webjam-tornado.png'

class ProjectComp extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		switch (this.getAttribute('imgSrc')) {
			case 'dynamic':
				this.imgSrc = dynamic
				break
			case 'userAvatar':
				this.imgSrc = userAvatar
				break
			case 'webjamRecap':
				this.imgSrc = webjamRecap
				break
			case 'webjamFlash':
				this.imgSrc = webjamFlash
				break
			case 'webjamTornado':
				this.imgSrc = webjamTornado
				break
			default:
				this.imgSrc = dynamic
		}

		this.href = this.hasAttribute('href') ? this.getAttribute('href') : '#'
		this.imgAlt = this.hasAttribute('imgAlt')
			? this.getAttribute('imgAlt')
			: 'a github action to automatically update your github readme with your activity'
		this.title = this.hasAttribute('title')
			? this.getAttribute('title')
			: 'Dynamic Profile Readme'

		const template = document.createElement('template')
		template.innerHTML = `
            <style>
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					text-align: center;
				}

                .project-comp {
                    background-color: #24314e;
                    border-radius: 3rem;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    max-width: 23rem;
                    width: 14rem;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.3);
                }

                .project-title {
                    margin: 1rem 0 2rem;
                    position: relative;
                }

                a {
                    text-decoration: none;
                    color: white;
                }

                .img {
                    height: 8rem;
                }

                .show {
                    position: relative;
                    top: 0;
                    height: 20rem
                }

                @media (min-width: 820px) {
                    .project-comp {
                        width: 17rem
                    }

                    .img {
                        height: 9.5rem;
                    }
                }

                @media (min-width: 1400px) {
                    .project-comp {
                        width: 20rem
                    }

                    .img {
                        height: 12rem;
                    }
                }
            </style>
            <li>
                <a href='${this.href}' target="_blank" rel="noopener noreferrer" class='project-comp'>

                    <h3 class='project-title'>${this.title}</h3>

                    <img class='img' src='${this.imgSrc}' alt='${this.imgAlt}'/>
                </a>
			</li>
            `

		shadow.appendChild(template.content.cloneNode(true))

		const projectComp = this.shadowRoot.querySelector('.project-comp')
		const img = this.shadowRoot.querySelector('.img')

		//Not working FIX
		projectComp.addEventListener('onmouseover', (e) => {
			console.log('in')
			img.classList.add('show')
		})

		projectComp.addEventListener('onmouseout', (e) => {
			console.log('out')
			img.classList.remove('show')
		})
	}
}

customElements.define('project-comp', ProjectComp)

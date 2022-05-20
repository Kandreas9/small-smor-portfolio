import './project-comp'
import { projects } from '../utils/projects'

class ProjectsComp extends HTMLElement {
	constructor() {
		super()

		const projectList = projects
			.map((el) => {
				console.log(el)
				return `<project-comp href='${el.href}' title='${el.title}' imgSrc='${el.imgSrc}' imgAlt='${el.imgAlt}'></project-comp>`
			})
			.join(' ')

		// this.target = {
		// 	grid: '1fr',
		// }
		// this.gridTemplateColumnsProxy = new Proxy(this.target, {})
		console.log('log', projects[1].title)
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

				ul {
					margin: 5rem 0;
					list-style-type: none;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					align-items: center;
					gap: 2rem;
				}
            </style>
            <ul class='projects-comp'>

				${projectList}
			</ul>
            `

		shadow.appendChild(template.content.cloneNode(true))

		// window.addEventListener('resize', () => {
		// 	if (window.innerWidth >= 820 && this.target.grid !== '1fr 1fr') {
		// 		this.gridTemplateColumnsProxy.grid = '1fr 1fr'
		// 		shadow.appendChild(template.content.cloneNode(true))
		// 	} else if (window.innerWidth < 820 && this.target.grid !== '1fr')
		// 		this.gridTemplateColumnsProxy.grid = '1fr'
		// 	shadow.appendChild(template.content.cloneNode(true))
		// })
	}
}

customElements.define('projects-comp', ProjectsComp)

import './style.css'
import './web-components/nav/nav-comp/nav-comp'
import './web-components/projects-comp'

const header = document.querySelector('header')
const triangles = document.querySelectorAll('.triangle')
// let x
// let y
header.addEventListener('mousemove', (e) => {
	let x = e.offsetX
	let y = e.offsetY

	// console.log(e.offsetY)
	for (let triangle of triangles) {
		let calc = (x - y * 1) / 100
		let opacity = calc < 0.4 ? 0.4 : calc

		triangle.style.opacity = opacity
		if (e.offsetY < 100) {
			// triangle.classList.remove('lessOpacity')
			// triangle.classList.add('moreOpacity')
		} else if (e.offsetY > 100) {
			// triangle.classList.remove('moreOpacity')
			// triangle.classList.add('lessOpacity')
		}

		// console.log(e.offsetX)
	}

	// triangles[0].style.backgroundColor = `hsl(223, ${x}%, ${y}%)`
	// triangles[1].style.backgroundColor = `hsl(223, ${x}%, ${y}%)`
	// triangles[2].style.backgroundColor = `hsl(223, ${x}%, ${y}%)`
})

// function randomFrom(min, max) {
// 	return +Math.floor(Math.random() * (max - min + 1) + min)
// }

const btn = document.getElementById("btn")
const textName = document.getElementById("textName")
const inputText = document.getElementById("inputText")

const funLowerCase = (inputText) => {
	console.log(textName.innerHTML.toLowerCase())
	// return textName.innerHTML = inputText
	return textName.innerHTML = inputText.getAttribute("")
	// return textName.innerHTML = textName.innerHTML.toLowerCase()
}


btn.addEventListener("click", () => funLowerCase(inputText.value))





const countBtn = document.querySelector("#countBtn")
const counting = document.querySelector("#counting")

let timer_on = 9;
const funStartCount = () => {
	setInterval(() => {
		if(!timer_on == 0) {
			return counting.innerHTML = timer_on--
		} else {
			return counting.innerHTML = 'STOP'
			 clearInterval()
		}
	}, 1000)
}

countBtn.addEventListener('click', funStartCount)
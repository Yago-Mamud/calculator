let equation = [];
const preview = document.getElementById("preview");
//handles buttons ( keyboard )
document.addEventListener("keydown", (keyPressed) => {
	if (keyPressed.key >= "0" && keyPressed.key <= "9") {
		if (equation.length >= 32) {
			alert("ERROR: FULL ARRAY");
			return false;
		} else {
			equation.push(keyPressed.key);
			previewFunction();
		}
	} else if (keyPressed.key = "Backspace") {
		equation.pop();
		previewFunction();
	}
});
//handles the buttons ( clickable )
document.querySelectorAll(".calcButton").forEach((calcButton) => {
	calcButton.addEventListener("click", () => {
		if (equation.length >= 32) {
			alert("ERROR: FULL ARRAY");
			return false;
		} else {
			equation.push(calcButton.value);
			previewFunction();
		}
	});
});
//handles calculations
const calcHandler = document.getElementById("calcHandler");
calcHandler.addEventListener("click", () => {
	const expression = equation.join('');
	let result;
	try { 
		result = new Function(`return ${expression}`)();
	} catch {
		result = undefined;
	}
	if (result === undefined) {
		alert("ERROR: SOMETHING WENT WRONG");
		equation.length = 0
		preview.innerText = "0";
		return false
	} else {
		equation.length = 0
		preview.innerText = result;
	}
});
//backspace 
const backspace = document.getElementById("backspace");
backspace.addEventListener("click", () => {
	equation.pop();
	previewFunction();
});
//preview handler
function previewFunction() {
	preview.innerText = equation.join("").replace(/[,]/g, "");
}
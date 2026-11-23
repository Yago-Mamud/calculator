let equation = [];
const preview = document.getElementById("preview");
//KEYBOARD INPUTS
document.addEventListener("keydown", (keyPressed) => {
	if (keyPressed.key >= "0" && keyPressed.key <= "9") {
		if (equation.length >= 32) {
			alert("ERROR: FULL ARRAY");
			return false;
		} else {
			equation.push(keyPressed.key);
			previewFunction();
		}
	} else if (keyPressed.key == "Backspace") {
		equation.pop();
		previewFunction();
	} else if (keyPressed.key == "+" || keyPressed.key == "*" || keyPressed.key == "/" || keyPressed.key == "-"){
		equation.push(keyPressed.key);
		previewFunction();
	} else if (keyPressed.key == "x") {
		equation.push("*");
		previewFunction();
	}
});
//CLICKABLE INPUT
//numbers
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
//backspace
const backspace = document.getElementById("backspace");
backspace.addEventListener("click", () => {
	equation.pop();
	previewFunction();
});
//
//HANDLES CALCULATIONS
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
//PREVIEW HANDLER
function previewFunction() {
	preview.innerText = equation.join("").replace(/[,]/g, "");
}
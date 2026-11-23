let equation = [];
const specialKeys = ["+", "*", "/", "-", "."];
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
	} else if (specialKeys.includes(keyPressed.key)){
		if (specialKeys.includes(equation.at(-1))) {
			return false;
		} else {
			equation.push(keyPressed.key);
			previewFunction();
		};
	} else if (keyPressed.key == "x") {
		equation.push("*");
		previewFunction();
	} else if (keyPressed.key == "Enter") {
		calculate();
	} else if (keyPressed.key == "Escape") {
		equation.length = 0;
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
			if (specialKeys.includes(calcButton.value)) {
				if (specialKeys.includes(equation.at(-1))) {
					return false;
				} else {
					equation.push(calcButton.value);
					previewFunction();
				}
			} else {
				equation.push(calcButton.value);
				previewFunction();
			}
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
//
const calcHandler = document.getElementById("calcHandler");
calcHandler.addEventListener("click", () => { calculate() });
//
function calculate() {
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
}
//PREVIEW HANDLER
function previewFunction() {
	if (equation.length == 0) {
		preview.innerText = "0";
	} else {
		preview.innerText = equation.join("").replace(/[,]/g, "");
	}
}
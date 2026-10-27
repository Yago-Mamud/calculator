let equation = [];
const preview = document.getElementById("preview");
//handles the buttons
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
	const result = new Function(`return ${expression}`)();
	childRemoval();
	createOutput(result);
	equation.length = 0
	preview.innerText = "0";
});
//adds the append child
const outputContainer = document.getElementById("outputContainer");
const createOutput = created => {
	const newMark = document.createElement("p");
	newMark.textContent = String(created);
	newMark.classList.add("outputC");
	outputContainer.appendChild(newMark);
}
//removes every child
const childRemoval = tbRemoved => {
	const cChild = document.querySelectorAll(".outputC");
	cChild.forEach ((childRemoved) => {
		outputContainer.removeChild(childRemoved);
	});
};
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
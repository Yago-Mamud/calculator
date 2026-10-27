let equation = [];
document.querySelectorAll(".calcButton").forEach((calcButton) => {
	calcButton.addEventListener("click", () => {
		equation.push(calcButton.value);
	});
});

const calcHandler = document.getElementById("calcHandler");
calcHandler.addEventListener("click", () => {
	const expression = equation.join('');
	const result = new Function(`return ${expression}`)();
	console.log(result);
	equation.length = 0
});
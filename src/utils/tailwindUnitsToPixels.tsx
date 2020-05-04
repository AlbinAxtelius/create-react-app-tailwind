const tailwindUnitsToPixels = (unit: number) =>
	convertTailwindUnitToRems(unit) * getCurrentRemSize();

const convertTailwindUnitToRems = (unit: number) => unit / 4;

const getCurrentRemSize = () =>
	parseFloat(getComputedStyle(document.documentElement).fontSize);

export default tailwindUnitsToPixels;

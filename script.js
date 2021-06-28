const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
	return Number((this.tax * salary).toFixed(2));
}

    console.log("Функція, яка рахує скільки податку ви заплатите в певній країні :", getMyTaxes.call(latvia, 20));

function getMiddleTaxes() {
	return Number((this.tax * this.middleSalary).toFixed(2));
}

    console.log("Функція, яка рахує скільки у середньому податків платять у кожній країні :", getMiddleTaxes.call(litva));

function getTotalTaxes() {
	return Number((this.tax * this.middleSalary * this.vacancies).toFixed(2));
}

    console.log("Функція, яка рахує скільки усього податків платять у кожній країні :", getTotalTaxes.call(ukraine));

function getMySalary(country) {
	const minSalary = 1500;
	const maxSalary = 2000;
	const salary = Math.round(
		Math.random() * (maxSalary - minSalary) + minSalary
	);
	const taxes = Number((country.tax * salary).toFixed(2));
	const profit = salary - taxes;
	const mySalary = {
		salary: salary,
		taxes: taxes,
		profit: profit,
	};
	return mySalary;
}
    setInterval(() => {
	    console.log("Розрахунок для вибраної країни, визначається кожні 10 с. :", getMySalary(ukraine));
    }, 10000);
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
};

const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 25,
	location: 'New York'
};

const student2: Student = {
	firstName: 'Jane',
	lastName: 'Doe',
	age: 25,
	location: 'New York'
};

const studentsList: Student[] = [student1, student2];
const keys: (keyof Student)[] = ['firstName', 'lastName', 'age', 'location'];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// Add header row
const tr: HTMLTableRowElement = document.createElement('tr');
for (const key of keys) {
	if (student1.hasOwnProperty(key)) {
		const th = document.createElement('th');
		th.innerText = key;
		tr.appendChild(th);
	}
}
thead.appendChild(tr);

// Add data rows
for (const student of studentsList) {
	const tr: HTMLTableRowElement = document.createElement('tr');
	for (const key of keys) {
		const td = document.createElement('td');
		td.innerText = student[key].toString();
		tr.appendChild(td);
	}
	tbody.appendChild(tr);
}

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

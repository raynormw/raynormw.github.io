class Student {
	constructor(name, age, dateOfBirth, gender, studentID, hobbies) {
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.studentID = studentID;
		this.hobbies = hobbies;
	}

	setName(newName) {
		this.name = newName;
	}

	setAge(newAge) {
		this.age = newAge;
	}

	setDateOfBirth(newDate) {
		this.dateOfBirth = newDate;
	}

	setGender(newGender) {
		if (newGender == "Male" || newGender == "Female") {
			this.gender = newGender;
		} else {
			console.log ("Input only 'Male' or 'Female'");
		}
	}

	addHobby(newHobby) {
		this.hobbies.push(newHobby);
	}

	removeHobby(deleteHobby) {
		this.hobbies.splice(this.hobbies.indexOf(deleteHobby), 1);
	}

	getData() {
		return `Name: ${this.name}
Age: ${this.age}
Date of Birth: ${this.dateOfBirth}
Gender: ${this.gender}
StudentID: ${this.studentID}
Hobbies: ${this.hobbies}`;
	}
}

let student1 = new Student("Tirta", 29, "1 Juli 1987", "Male", "123twp", ["Futsal", "Badminton"]);
console.log(student1.getData());

student1.addHobby("Basket");
console.log(student1.getData());

student1.removeHobby("Basket");
console.log(student1.getData());

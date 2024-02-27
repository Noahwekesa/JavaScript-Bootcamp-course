const firstname = "noah";
const secondname = "wekesa";

function getFullName(firstname, secondname){
	return `${firstname} ${secondname}`
}
const Mygreetings = `hello ${getFullName(firstname, secondname)}`;

console.log(Mygreetings);

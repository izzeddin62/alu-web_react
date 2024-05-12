export const cpp = new Subjects.Cpp();
export const react = new Subjects.React();
export const java = new Subjects.Java();
export const cteacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
}; 
cpp.setTeacher(cteacher);
console.log(cpp.getRequirements());

console.log(cpp.getAvailableTeacher());
namespace Subjects {
    export interface Teacher {
        experienceTeacherC?: number
    }

    export class Cpp extends Subject {
        getRequirements() {
            return "Here is the list of requirements for Cpp"
        }
        getAvailableTeacher() {
            if (this.teacher.experienceTeacherC) return `The available Teacher: ${this.teacher.firstName}`;
            return 'No available teacher'
        }
    }

}
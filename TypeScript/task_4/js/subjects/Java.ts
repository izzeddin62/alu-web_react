namespace Subjects {
    export interface Teacher {
        experienceTeacherJava?: number
    }

    export class Java extends Subject {
        getRequirements() {
            return "Here is the list of requirements for Java"
        }
        getAvailableTeacher() {
            if (this.teacher.experienceTeacherJava) return `The available Teacher: ${this.teacher.firstName}`;
            return 'No available teacher'
        }
    }

}
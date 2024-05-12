namespace Subjects {
    export interface Teacher {
        experienceTeacherReact?: number
    }

    export class React extends Subject {
        getRequirements() {
            return "Here is the list of requirements for React"
        }
        getAvailableTeacher() {
            if (this.teacher.experienceTeacherReact) return `The available Teacher: ${this.teacher.firstName}`;
            return 'No available teacher'
        }
    }
}
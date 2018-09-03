export enum Gender {
    male = "man",
    female = "vrouw",
    other = "anders",
}

export class Member {

        constructor(public id: number, 
                public firstName: string,
                public lastName: string,
                public insertion: string,
                public dob: Date,
                public gender: Gender,
                public bio: string) {}

    getFullName = () => {
        return this.firstName + (this.insertion.length > 0 ? " " + this.insertion : "") + " " + this.lastName;
    }

    getIdString = () => {
        return (this.firstName+this.insertion+this.lastName).toLowerCase().replace(/\s/g, '');;
    }

    getAge = () => {
        var today = new Date();
        var thisYear = 0;
        if (today.getMonth() < this.dob.getMonth()) {
            thisYear = 1;
        } else if ((today.getMonth() == this.dob.getMonth()) && today.getDate() < this.dob.getDate()) {
            thisYear = 1;
        }
        var age = today.getFullYear() - this.dob.getFullYear() - thisYear;
        return age;
    }
}
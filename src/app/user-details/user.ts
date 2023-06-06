export class User {
    name:string;
    email:string;
    password:string;
    dateOfBirth:string;

    constructor(name:string, email:string, password:string, dateOfBirth:string)
    { this.name = name;
        this.email= email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
    }
    
}

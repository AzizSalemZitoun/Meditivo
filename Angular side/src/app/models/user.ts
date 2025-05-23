export class User {
    id?: number; 
    username: string;
    email: string;
    password: string;
  
    constructor(username: string, email: string, password: string, id?: number) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password;
    }
  }
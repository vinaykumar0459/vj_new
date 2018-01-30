import { Component, OnInit } from '@angular/core';
import { userRegister } from './register.userdetails';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  User : userRegister;
  // dateofbirth: Date;
  // weddingdate: Date;
  // minDate: Date;
  // maxDate: Date;
  constructor() { }

  ngOnInit() {
    this.User = {
      username : "",
      email : "",
      password : "",
      cpassword : "",
      name : "",
      dateofbirth: "",
      mobile : undefined,
      gender : "",
      occupation : "",
      weddingdate : ""
    }
    // let today = new Date();
    // let month = today.getMonth();
    // let year = today.getFullYear();
    // let prevMonth = (month === 0) ? 11 : month -1;
    // let prevYear = (prevMonth === 11) ? year - 1 : year;
    // today = this.minDate;
    // console.log(this.minDate.setMonth)
    // this.minDate.setMonth(prevMonth);
    // this.minDate.setFullYear(prevYear);
  }
  signupform(User) {
    console.log('hii')
    console.log(this.User)
  }

}


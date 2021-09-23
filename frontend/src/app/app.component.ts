import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: AppService) {
  }

  success = false
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('',[Validators.required])
  address = new FormControl('',[Validators.required])

  //For waiting between lines
  delay = ms => new Promise(res => setTimeout(res, ms))

  getErrorMessage() {
    if (this.email.hasError('required') || this.name.hasError('required') || this.address.hasError('required')) {
      return 'Please fill in all the fields';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  createUser() {
    if (this.getErrorMessage() === '') {
      this.service.createQuestion({
        "name" : this.name.value,
        "email" : this.email.value,
        "address" : this.address.value
      }).subscribe(async (res) => {
          this.email.reset()
          this.name.reset()
          this.address.reset()
          this.success =true
          await this.delay(1000)
          this.success = false
      })
    }
  }
}

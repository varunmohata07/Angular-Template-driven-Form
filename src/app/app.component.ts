import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Td-Form';
  genders=['Male', 'Female', 'Cannot Say'];

  suggestUserName(){
    const suggestUserName ="Superuser"
  }

  onSubmit(form : NgForm){
    console.log(form);
    console.log(form.value);
    console.log(form.status)
  }
}

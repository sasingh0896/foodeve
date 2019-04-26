import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ExecutebashService } from './executebash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm: FormGroup;
  title = 'my-app';
  constructor(private executebash:ExecutebashService, private fb:FormBuilder){}
  ngOnInit(){
    this.loginForm = this.fb.group({
      field1: ['', Validators.required],
      field2: ['', Validators.required],
      field3: ['', Validators.required],
      field4: ['', Validators.required],
      field5: ['', Validators.required]
    })
  }
  onSubmit() {
    this.executebash.execute({ "domainName": this.loginForm.get('field1').value,"zoneID": this.loginForm.get('field2').value ,"cloudFlareKey": this.loginForm.get('field3').value ,"cloudFlareEmail": this.loginForm.get('field4').value,"ipAddress": this.loginForm.get('field5').value  })
      .subscribe(
        data => {

   },
        error => {
        }
      )
  }
}

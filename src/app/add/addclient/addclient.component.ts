import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  clientForm!: FormGroup;
  isSubmitted = false;
  constructor(private fb:FormBuilder, private router: Router, private subServ:SubjectService){}

  ngOnInit(): void {
    this.clientform();
  }

  clientform(){
    this.clientForm = this.fb.group({
      clientname: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl()
    })
  }

  addClient() {
      this.isSubmitted =true
      this.clientForm.get('clientname')?.setValidators([Validators.required]);
      this.clientForm.get('clientname')?.updateValueAndValidity();
      this.clientForm.get('email')?.setValidators([Validators.required,Validators.email]);
      this.clientForm.get('email')?.updateValueAndValidity();
      this.clientForm.get('phoneNumber')?.setValidators([Validators.required]);
      this.clientForm.get('phoneNumber')?.updateValueAndValidity();
      if(this.clientForm.invalid){
        return;
      }
      else{
      //this.router.navigate(['/clientlist'],  {state: [this.clientForm.value]});
      this.subServ.setaddDataLoadEvnt(this.clientForm.value);
      this.subServ.setsendeditDataLoadEvnt(null);
      this.router.navigate(['/clientlist']);
    }
  }

  get f() { return this.clientForm.controls; }
  
  @HostListener('window:popstate', ['$event'])
  onPopState(event:any) {
      this.subServ.setaddDataLoadEvnt(null);
      console.log('Back button pressed');
  }
}

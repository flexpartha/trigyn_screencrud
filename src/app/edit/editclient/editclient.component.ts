import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit, OnDestroy {

  clientListData:any;
  editForm!: FormGroup;
  isSubmitted = false;
  geteditLoadedObj:Subscription = new Subscription();

  constructor(private serv: SubjectService, private router: Router,){}

  ngOnInit(): void {
    this.createUpdateForm();
    this.geteditLoadedObj = this.serv.geteditDataLoadEvnt().subscribe((data)=>{
      if(data){
        this.editForm.patchValue({
          clientname: data.clientname,
          email: data.email,
          phoneNumber: data.phoneNumber
        })
      }
    })
  }

  createUpdateForm(){
    this.editForm = new FormGroup({
      clientname: new FormControl(null),
      email: new FormControl(null),
      phoneNumber: new FormControl(null)
    })
  }

  updateClient() {
    this.editForm = new FormGroup({
      clientname: new FormControl(this.editForm.get('clientname')?.value),
      email: new FormControl(this.editForm.get('email')?.value),
      phoneNumber: new FormControl(this.editForm.get('phoneNumber')?.value),
    });

    this.isSubmitted =true
      this.editForm.get('clientname')?.setValidators([Validators.required]);
      this.editForm.get('clientname')?.updateValueAndValidity();
      this.editForm.get('email')?.setValidators([Validators.required,Validators.email]);
      this.editForm.get('email')?.updateValueAndValidity();
      this.editForm.get('phoneNumber')?.setValidators([Validators.required]);
      this.editForm.get('phoneNumber')?.updateValueAndValidity();
      if(this.editForm.invalid){
        return;
      }
      else{
        this.serv.setsendeditDataLoadEvnt(this.editForm.value);
        this.serv.setaddDataLoadEvnt(null);
        this.router.navigate(['/clientlist']);
      }
  }

  get f() { return this.editForm.controls; };

  @HostListener('window:popstate', ['$event'])
  onPopState(event:any) {
      this.serv.setaddDataLoadEvnt(null);
      console.log('Back button pressed');
  }

  ngOnDestroy(): void {
    this.geteditLoadedObj.unsubscribe();
  }
}

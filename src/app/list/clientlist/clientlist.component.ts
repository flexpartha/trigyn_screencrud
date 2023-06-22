import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit, OnDestroy {

  getSessionData:any;
  loadData:any;
  getLoadedObj:Subscription = new Subscription();
  getEditedObj:Subscription = new Subscription();
  clientList: Array<[any]> = [];
  clientnameString = '';
  clientData:any;

  constructor(private router: Router, private subService:SubjectService){

    this.getSessionData = sessionStorage.getItem("loaddata");
    let ssD = this.getSessionData;
    console.log(ssD);
    if(this.getSessionData !=null){
         this.clientList = (JSON.parse(this.getSessionData));
         //let emarr = [];
         //emarr.push(JSON.parse(this.getSessionData));
         //console.log(emarr);
         //this.clientList = emarr[0];
         console.log(this.clientList);
    }
  }

  ngOnInit(): void {
    console.log(this.router.url)
    this.getLoadedObj = this.subService.getaddDataLoadEvnt().subscribe((data)=>{
      if(data !=null){
        this.clientData = data;
        this.clientList.push(this.clientData);
        sessionStorage.setItem("loaddata",JSON.stringify(this.clientList));
      }
    });

    this.getEditedObj = this.subService.getsendeditDataLoadEvnt().subscribe((editeddata)=>{
      if(editeddata !=null){
        let selIndex:any = sessionStorage.getItem("selectedIndex");
        this.clientList.splice(selIndex,1,editeddata);
        sessionStorage.setItem("loaddata",JSON.stringify(this.clientList));
      }
    })
  }

  selectedClient(clientData:any,idx:any){
    sessionStorage.setItem("selectedIndex",idx);
    this.subService.seteditDataLoadEvnt(clientData);
    this.router.navigate(['/editclient']);
  }

  
deleteclient(idx:number) {
  this.clientList.splice(idx,1);
  sessionStorage.setItem("loaddata",JSON.stringify(this.clientList));
}
  
navigaeAddclient() {
  this.router.navigate(['/addclient'])
 }

 ngOnDestroy(): void {
    this.getLoadedObj.unsubscribe();
    this.getEditedObj.unsubscribe();
 }
}

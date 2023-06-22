import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  loadDataSub = new Subject();
  private _dataLoadSubject : BehaviorSubject<any> = new BehaviorSubject(null);
  private _editdataLoad : BehaviorSubject<any> = new BehaviorSubject(null);
  private _sendDatafromEdit : BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }

  getLoadData(obj:any){
    this.loadDataSub.next(obj);
  }

  public getaddDataLoadEvnt():Observable<any> {
    return this._dataLoadSubject.asObservable();
  }

  public setaddDataLoadEvnt(message: any) {
    this._dataLoadSubject.next(message);
  }

  public geteditDataLoadEvnt():Observable<any> {
    return this._editdataLoad.asObservable();
  }

  public seteditDataLoadEvnt(message: any) {
    this._editdataLoad.next(message);
  }

  public getsendeditDataLoadEvnt():Observable<any> {
    return this._sendDatafromEdit.asObservable();
  }

  public setsendeditDataLoadEvnt(message: any) {
    this._sendDatafromEdit.next(message);
  }
}

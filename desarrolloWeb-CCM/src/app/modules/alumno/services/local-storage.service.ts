import {Inject, Injectable } from '@angular/core';
import {LOCAL_STORAGE,StorageService} from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public userList=[];

  constructor(@Inject(LOCAL_STORAGE)private storage:StorageService) { }

  public storeOnLocalStorage(user:string):void{
      const userListStorage = this.storage.get('USER_LIST') || [];
      userListStorage.push({username: user,fecha: new Date()});
      this.storage.set('USER_LIST',userListStorage);
      this.userList = userListStorage;
  }

  public readLocalStorage():object{
    return  this.storage.get('USER_LIST');
  }
}

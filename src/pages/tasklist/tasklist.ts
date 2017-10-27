import { Component } from '@angular/core';
import { NavController,ItemSliding } from 'ionic-angular';
// import { Storage } from '@ionic/storage' ;
// import { Dialogs } from '@ionic-native/dialogs' ;
// import { Task } from './task' ;
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
  // tasks: Array<Task> = [] ;
  tasks: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public angularfire: AngularFireDatabase) {
    this.tasks = angularfire.list('/tasks');
  }

  addItem(){
  	/**
    this.dialogs.prompt('New Task','To-do',['Ok','Cancel'],'').then( theResult => {
        if ((theResult.buttonIndex==1) && (theResult.input1 != '')){
          this.tasks.push({title:theResult.input1, status:'open'}) ;
        }

    }) ;
    **/
    let theNewTask : string = prompt("New Task") ;
  	if (theNewTask !== ''){
  		this.tasks.push({title:theNewTask, status:'open'}) ;
  	}

  }

  markAsDone(slidingItem:ItemSliding, task: any){
    // task.status="done" ;
    this.tasks.update(task.$key,{status: 'done'});
  	slidingItem.close() ;
  }

  removeTask(slidingItem:ItemSliding,task: any){
  	// task.status = "removed"
  	// let index = this.tasks.indexOf(task) ;
  	// if (index > -1){
  	// 	this.tasks.splice(index,1)
    //   this.storage.set('todos',this.tasks) ;
    // }
    this.tasks.remove(task.$key);
  	slidingItem.close() ;
  }

}

import { Component, OnInit } from '@angular/core';
//noinspection TypeScriptCheckImport
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit():void {
    firebase.initializeApp({
      apiKey: "AIzaSyAS1OBSx6AC-cYhNTY7U54VtVeFL-zcICw",
      authDomain: "ng-recipe-book-b3822.firebaseapp.com",
    })
  }
}

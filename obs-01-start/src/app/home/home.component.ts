import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription!: Subscription;

  constructor() { }

  ngOnInit() {
    /*this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    });*/

    let customIntervalObservable = Observable.create((observer) => {
      setInterval(() => {
        observer.next();
      }, 1000);
    });

  }

  ngOnDestroy(): void {
    /*this.firstObsSubscription.unsubscribe();*/
  }

}

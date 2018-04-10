import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription

  constructor(private route: ActivatedRoute) {
  }

  // it's ok to use snapshot for first initialization but you won't be able to react
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // if params changed it will execute code
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  // not neccessary because Angular will clear it by itself
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}

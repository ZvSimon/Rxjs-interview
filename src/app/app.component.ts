import {Component} from '@angular/core';
import {delay, from, map, mergeMap, Observable, of} from "rxjs";

export interface UserInterface{
  id:string,
  name:string,
  age:number
}


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [],
  styleUrls: ['./app.component.css']
})


export class AppComponent {
constructor() {
  const example = (operator: any) => () => {
    from([0, 1, 2, 3, 4])
      .pipe(operator((x: any) => of(x).pipe(delay(200))))
      .subscribe(
        console.log,
        () => {},
        () => console.log(`${operator.name} completed`)
      );
  };

  example(mergeMap)();
}

}

import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe} from "@angular/common";
import {map, Observable, of, tap} from "rxjs";



export interface UserInterface {
  id:number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  constructor(){
    const users: UserInterface[] = [
      { id: 1, name: 'John', age: 28 },
      { id: 2, name: 'Jane', age: 32 },
      { id: 3, name: 'Jack', age: 25 },
    ];

  const normalizeUsers = (users$ : Observable<UserInterface[]>) : Observable<string[]> => {
    return users$.pipe(
      map(users=>users.map(user=>user.name)),
      tap(console.log)
    );
  };
  const users$ = of(users);
  normalizeUsers(users$).subscribe();
  }
}


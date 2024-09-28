import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {filter, from, of, tap, toArray} from "rxjs";


export interface UserInterface {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

/**
 export class AppComponent {
 constructor() {
 const users: UserInterface[] = [
 {id: 1, name: 'John', age: 28,isActive: true},
 {id: 2, name: 'Jane', age: 32,isActive: true},
 {id: 3, name: 'Jack', age: 25,isActive: false},
 ];
 const users$ = of(users);
 users$.pipe(
 map(users=> users.filter(user=>user.isActive)),
 tap(console.log)
 ).subscribe()
 }
 }**/
//output : Array [ {…}, {…} ]
// ​
// 0: Object { id: 1, name: "John", age: 28, … }
// ​
// 1: Object { id: 2, name: "Jane", age: 32, … }
// ​
// length: 2
//  export class AppComponent {
//  constructor() {
//  const users: UserInterface[] = [
//  {id: 1, name: 'John', age: 28,isActive: true},
//  {id: 2, name: 'Jane', age: 32,isActive: true},
//  {id: 3, name: 'Jack', age: 25,isActive: false},
//  ];
//  const users$ = from(users);
//  users$.pipe(
// filter(users=>users.isActive),
//  tap(console.log)
//  ).subscribe()
//  }
//  //output :
//   //Object { id: 1, name: "John", age: 28, isActive: true }
//   // Object { id: 2, name: "Jane", age: 32, isActive: true }
//  }

/**
 export class AppComponent {
 constructor() {
 const users: UserInterface[] = [
 {id: 1, name: 'John', age: 28, isActive: true},
 {id: 2, name: 'Jane', age: 32, isActive: true},
 {id: 3, name: 'Jack', age: 25, isActive: false},
 ];
 const users$ = of(users);
 users$.pipe(
 filter(users => users.every(user => user.isActive)),
 tap(console.log)
 ).subscribe()
 }
 }**/
// Ne va rien emettre car un user est false

export class AppComponent {
  constructor() {
    const users: UserInterface[] = [
      {id: 1, name: 'John', age: 28, isActive: true},
      {id: 2, name: 'Jane', age: 32, isActive: true},
      {id: 3, name: 'Jack', age: 25, isActive: false},
    ];
    const users$ = from(users);
    users$.pipe(
      filter(users=> users.isActive),
      toArray(),
      tap(console.log)
    ).subscribe()
  }
}



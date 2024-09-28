# RxJS Interview Questions

## 1. You receive a `UserInterface` array and need to return an observable of names.

You are given an array of objects with a type `UserInterface`.
Write a function that extracts the `name` property from each object and returns them as an observable array of names.

```typescript
interface UserInterface {
  id: number;
  name: string;
  age: number;
}

const users: UserInterface[] = [
  { id: 1, name: 'John', age: 28 },
  { id: 2, name: 'Jane', age: 32 },
  { id: 3, name: 'Jack', age: 25 },
];
```
## 2. How Rxjs map differs from JavaScript map ?
`
Rxjs map is used to transform the items emitted by an Observable by applying a function to each item whereas JavaScript map is used to transform the items of an array by applying a function to each item.
`[LearnRxJS Map Operator](https://www.learnrxjs.io/learn-rxjs/operators/transformation/map)


## 3. How filter works in Rxjs ?

Write an example of rxjs.
`

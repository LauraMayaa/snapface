import { Component, OnInit } from '@angular/core';
import { Observable, delay, filter, interval, map, mergeMap, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // intervals$!: Observable<string>

  // ngOnInit() {

  //   this.intervals$ = interval(1000).pipe(
  //     filter(value => value % 3 === 0),
  //     map(value => value % 2 === 0 ?
  //       `Je suis ${value} et je suis pair` :
  //       `Je suis ${value} et je suis impair`),
  //     tap(text => this.logger(text))
  //   );
  // filter pr filtrer les émissions et map pr les transformer
  // tap pr les sides effects agis sur les émissions sans les modifier 
  // }
  // logger(text: string) {
  //   console.log(`Log: ${text}`)
  // }

  // Ex d'OPC :

  // redTrainsCalled = 0;
  // yellowTrainsCalled = 0;

  ngOnInit() {
    //   interval(500).pipe(
    //     take(10),
    //     map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
    //     tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
    //     mergeMap(color => this.getTrainObservable$(color)),
    //     tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    //   ).subscribe();
    // }

    // getTrainObservable$(color: 'rouge' | 'jaune') {
    //   const isRedTrain = color === 'rouge';
    //   isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    //   const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    //   console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    //   return of({ color, trainIndex }).pipe(
    //     delay(isRedTrain ? 5000 : 6000)
    //   );
    // }

    // translateColor(color: 'rouge' | 'jaune') {
    //   return color === 'rouge' ? 'red' : 'yellow';
    // }

    // mergeMap n'attends pas que le tain arrive et fait qd mm partir l'autre en parallele 
    // concatMap elle att que le train arrive, note tous les trains en attente ds l'ordre puis les fait partir une fois que c bn
    // exhaustMap elle ne tient pas en compte l'odre 
    // switchMap elle prend le dernier train en compte 

  }
}
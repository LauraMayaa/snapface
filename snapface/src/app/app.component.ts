import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // ici on déclare la propriété avant de l'initialiser
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    // ici on initialise notre facesnap 
    this.mySnap = new FaceSnap(
      'Under the stars',
      "How many stars are in the universe? | Space",
      'https://i.natgeofe.com/n/2a12edda-3f79-45d1-b9bc-7ccc1499e5cf/1230_16x9.jpg?w=1200',
      new Date(),
      6,
    )
    // là on fait une nouvelle pizza FaceSnap en changeant qlqs ingrédiants 
    this.myOtherSnap = new FaceSnap(
      'Moonlight',
      "Apollo 17 astronauts collected rocks that reveal the moon's true age | CNN",
      'https://media.cnn.com/api/v1/images/stellar/prod/231004134732-full-moon.jpg?c=16x9&q=h_720,w_1280,c_fill',
      new Date(),
      7
    )
    this.myLastSnap = new FaceSnap(
      'Univers',
      "In a Meaningless Universe, Where Does Meaning Come From? | Psychology Today",
      'https://cdn2.psychologytoday.com/assets/styles/article_inline_full_caption/public/field_blog_entry_images/2023-03/Image%20for%20blog%20-%20In%20a%20Meaningless%20Universe,%20Where%20Does%20Meaning%20Come%20From%20-%20Future%20-%20AdobeStock.jpeg.jpg?itok=4x9FB9Z9',
      new Date(),
      7
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // ici on déclare la propriété avant de l'initialiser
  // mySnap!: FaceSnap; ça c'était au début mais on utilise + ss forme d'array:

  faceSnaps!: FaceSnap[];


  ngOnInit() {
    // ici on initialise notre facesnap 
    // this.mySnap = new FaceSnap() ça c'est dans le cas où on a un constructeur sinon on le met sous forme d'objet
    this.faceSnaps = [
      {

        title: 'Under the stars',
        description: "How many stars are in the universe? | Space",
        imageUrl: 'https://i.natgeofe.com/n/2a12edda-3f79-45d1-b9bc-7ccc1499e5cf/1230_16x9.jpg?w=1200',
        createdDate: new Date(),
        snaps: 140,
        location: 'Paris'
      },

      // là on fait une nouvelle pizza FaceSnap en changeant qlqs ingrédiants 
      {
        title: 'Moonlight',
        description: "Apollo 17 astronauts collected rocks that reveal the moon's true age | CNN",
        imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/231004134732-full-moon.jpg?c=16x9&q=h_720,w_1280,c_fill',
        createdDate: new Date(),
        snaps: 1263
      },
      {
        title: 'Univers',
        description: "In a Meaningless Universe, Where Does Meaning Come From? | Psychology Today",
        imageUrl: 'https://cdn2.psychologytoday.com/assets/styles/article_inline_full_caption/public/field_blog_entry_images/2023-03/Image%20for%20blog%20-%20In%20a%20Meaningless%20Universe,%20Where%20Does%20Meaning%20Come%20From%20-%20Future%20-%20AdobeStock.jpeg.jpg?itok=4x9FB9Z9',
        createdDate: new Date(),
        snaps: 7,
        location: 'NY'
      }
    ];
  }
}

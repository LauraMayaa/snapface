import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  // ici on récup la recette en lui disant qu'elle s'appelera faceSnap de type FaceSnap-->nom de la recette 
  @Input() faceSnap!: FaceSnap;


  // title!: string;
  // description!: string;
  // createdDate!: Date;
  // snaps!: number;
  // imageUrl!: string;
  buttonText!: string;

  // ici on a gardé uniquement le boutton et la méthode lié au bouton car ce sera le même bouton pour chaque snap
  // A noter qu'on initialise le bouton ds la méthode ngOnInit()

  ngOnInit() {
    // this.title = 'Archibald';
    // this.description = 'Mon meilleur ami depuis tout petit !';
    // this.createdDate = new Date();
    // this.snaps = 6;
    // this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = 'Oh Snap!'
  }

  onAddSnap() {

    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'OOPS'

    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!'
    }
  }
}

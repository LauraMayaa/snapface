import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  // ici on récup la recette en lui disant qu'elle s'appelera faceSnap de type FaceSnap-->nom de la recette 
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {

  }

  // ici on a gardé uniquement le boutton et la méthode lié au bouton car ce sera le même bouton pour chaque snap
  // A noter qu'on initialise le bouton ds la méthode ngOnInit()
  ngOnInit() {

    this.buttonText = 'Oh Snap!'
  }

  onAddSnap() {

    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'OOPS'

    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!'
    }
  }
}

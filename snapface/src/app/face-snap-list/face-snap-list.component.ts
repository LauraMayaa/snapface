import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  // ici on déclare la propriété avant de l'initialiser
  // mySnap!: FaceSnap; ça c'était au début mais on utilise + ss forme d'array:

  faceSnaps!: FaceSnap[];
  // pk on le fait ressortir ici celui là 

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit() {
    // ici on initialise notre facesnap 
    // this.mySnap = new FaceSnap() ça c'est dans le cas où on a un constructeur sinon on le met sous forme d'objet

    // mtn on initialise grâce au service
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps()
  }
}

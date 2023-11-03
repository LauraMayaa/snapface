import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";


@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    // on instancie pas les services de la mm manière que les components, pas de méthode ngOnInit()
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Under the stars',
            description: "How many stars are in the universe? | Space",
            imageUrl: 'https://i.natgeofe.com/n/2a12edda-3f79-45d1-b9bc-7ccc1499e5cf/1230_16x9.jpg?w=1200',
            createdDate: new Date(),
            snaps: 140,
            location: 'Paris'
        },

        // là on fait une nouvelle pizza FaceSnap en changeant qlqs ingrédients 
        {
            id: 2,
            title: 'Moonlight',
            description: "Apollo 17 astronauts collected rocks that reveal the moon's true age | CNN",
            imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/231004134732-full-moon.jpg?c=16x9&q=h_720,w_1280,c_fill',
            createdDate: new Date(),
            snaps: 1263
        },
        {
            id: 3,
            title: 'Univers',
            description: "In a Meaningless Universe, Where Does Meaning Come From? | Psychology Today",
            imageUrl: 'https://cdn2.psychologytoday.com/assets/styles/article_inline_full_caption/public/field_blog_entry_images/2023-03/Image%20for%20blog%20-%20In%20a%20Meaningless%20Universe,%20Where%20Does%20Meaning%20Come%20From%20-%20Future%20-%20AdobeStock.jpeg.jpg?itok=4x9FB9Z9',
            createdDate: new Date(),
            snaps: 7,
            location: 'NY'
        },
        {
            id: 4,
            title: 'Sun',
            description: "Sun directly above Sri Lanka from tomorrow till April 15 | Page 3 | Daily News",
            imageUrl: 'https://archives1.dailynews.lk/sites/default/files/news/2019/04/04/10572938-3x2-940x627.jpg',
            createdDate: new Date(),
            snaps: 250,
            location: 'Sri Lanka'
        },
        {
            id: 5,
            title: 'The four elements',
            description: "Les 4 éléments de la nature",
            imageUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2021/11/d6d7aefb-a4ea-4065-88f4-5ebe6ff4d6d7/870x489_gettyimages-160840465.jpg',
            createdDate: new Date(),
            snaps: 1500,
        },
        {
            id: 6,
            title: 'Spirituality',
            description: "Les lois de l'Univers",
            imageUrl: 'https://www.espritsciencemetaphysiques.com/wp-content/uploads/2018/01/lois-de-lUnivers.jpg',
            createdDate: new Date(),
            snaps: 777,
            location: 'NY'
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

}
// Ici on crée un modèle comme une recette de pizza en lui disant je veux tel et tel ingrédient

export class FaceSnap {
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public createdDate: Date,
        public snaps: number,
    ) { }


}
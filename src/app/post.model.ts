export class Post {
    constructor(
        public title : string, 
        public description: string,
        public imagePath: string, 
        public author: string, 
        public dateLineCreated: Date, 
        public numberOfLikes: number,
        public numberOfDislike: number
    ) {}
}
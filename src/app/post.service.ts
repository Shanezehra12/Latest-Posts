import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPosts: Post[] = [
    /* new Post(
      'Nature',
      'Nature is the ultimate source of our living. Both living and non-living things include nature, and everyone is interdependent, which helps maintain the ecosystem.Plants, animals, and humans all depend on nature for their survival.It supplies oxygen, sunlight, soil, water, and other necessary components.But deforestation has been the primary cause of global warming, destroying nature.In addition to exploiting excessive natural resources,other industries pollute the environment with toxic gases and chemicals',
      'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg',
      'test@test.com',
      new Date(),
      5,
      7
    ),

    new Post(
      'Yellowstone National Park ',
      'the U.S. state of Wyoming, Yellowstone is famed for its geothermal wonders including geysers, hot springs, and bubbling mud pots. Its also home to diverse wildlife such as grizzly bears, wolves, and herds of bison.',
      'https://cdn.britannica.com/97/122097-050-B89080F4/Morning-Glory-Pool-Upper-Geyser-Basin-Wyoming.jpg',
      'test@test.com',
      new Date(),
      4,
      4
    ),

    new Post(
      'Amazon Rainforest',
      'The Amazon Rainforest, spanning several countries in South America, is the largest tropical rainforest in the world. It hosts unparalleled biodiversity, with millions of species of plants, animals, and insects, many of which are found nowhere else on Earth.',
      'https://i.natgeofe.com/n/4d4ed7b5-01f6-4e19-be95-30ea6cd74b3b/23897_4x3.jpg',
      'test@test.com',
      new Date(),
      2,
      6
    ),

    new Post(
      'Galápagos Islands',
      'the Pacific Ocean off the coast of Ecuador, the Galápagos Islands are famed for their unique and diverse array of endemic species, which inspired Charles Darwins theory of evolution by natural selection. Visitors can observe wildlife such as giant tortoises, marine iguanas, and blue-footed boobies in their natural habitats.',
      'https://www.andbeyond.com/wp-content/uploads/sites/5/Galapagos-islands.jpg',
      'test@test.com',
      new Date(),
      4,
      8
    ),

    new Post(
      'Victoria Falls ',
      'Straddling the border between Zambia and Zimbabwe in southern Africa, Victoria Falls is one of the largest and most spectacular waterfalls in the world. Known locally as "The Smoke That Thunders," the falls plunge into a deep gorge, creating a mesmerizing spectacle of mist and rainbows.',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/b7/71/de/caption.jpg?w=1200&h=-1&s=1',
      'test@test.com',
      new Date(),
      3,
      10
    ), */
  ];

  //facility 1
  getPosts() {
    return this.listOfPosts;
  }

  //facility 2
  deletePost(index: number) {
    this.listOfPosts.splice(index, 1)
  }

  //facility 3
  addPost(post : Post) {
    this.listOfPosts.push(post)
  }

  //facility 4
  updatePost(index: number , post: Post) {
    this.listOfPosts[index] = post;
  }

  //facility 5
  getPost(index: number) {
    return this.listOfPosts[index];
  }

  //facility 6
  likePost(index: number) {
    this.listOfPosts[index].numberOfLikes += 1
  }

  //facility 7
  unlikePost(index: number) {
    this.listOfPosts[index].numberOfDislike += 1
  }

  //facility 8
  setPosts(listOfPosts: Post[]) {
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts)
  }
}

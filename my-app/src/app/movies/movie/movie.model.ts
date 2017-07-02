export class Movie {
  title: string;
  category: string;
  releaseYear: number;
  poster: string;
  actors: string;
  producers: string;
  synopsis: string;
  rate: number;
  lastViewDate: string;
  price: number;

  constructor (title: string,
               category: string,
               releaseYear: number,
               poster: string,
               actors: string,
               producers: string,
               synopsis: string,
               rate: number,
               lastViewDate: string,
               price: number) {

  this.title = title;
  this.category = category;
  this.releaseYear = releaseYear;
  this.poster = poster;
  this.actors = actors;
  this.producers = producers;
  this.synopsis = synopsis;
  this.rate = rate;
  this.lastViewDate = lastViewDate;
  this.price = price;
  }
}

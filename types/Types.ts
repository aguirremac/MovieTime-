export interface MovieType {
      title: String;
      movieId : String;
      year: Number;
      rated: String;
      released: String;
      runtime: String;
      imdbRating: Number;
      rTRating: String;
      posterLink: String;
      type: String;
}


export interface CinemaType {  
        title: String;
        movieId : String;
        location: String;
        cinemaPosterURL: String;
        cinemaNum: Number;
        timeSlot: Array<string>;
      }
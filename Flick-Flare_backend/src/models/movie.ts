import mongoose, { Schema, Document, Model } from "mongoose";


interface IMovie extends Document {
  title: string;
  description: string;
  releaseYear: number;
  genre: string;
  createdAt: Date;
  imdb:string;
}


const movieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  description: { type: String },
  releaseYear: { type: Number, required: true },
  genre: { type: String, required: true },
  imdb:{type:String},
  createdAt: { type: Date, default: Date.now },
});


const Movie = mongoose.model<IMovie>("Movie", movieSchema);
export default Movie;

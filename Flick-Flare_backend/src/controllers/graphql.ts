import { User } from "../models/user";
import Movie from "../models/movie";
import Wishlist from "../models/wishlist";
export const helloWord = () => "Hello, World!";
import bcrypt from "bcrypt";
type Post = {
  title: string;
  content: string;
};

type Wishlist = {
  user_id: string;
  movie_id: string;
};

type Movie = {
  title: string;
  description: string;
  releaseYear: number;
  genre: string;
  createdAt: Date;
  imdb: string;
};
export const newPost = (_: unknown, { title, content }: Post) => {
  return { title };
};

type User = {
  name: string;
  email: string;
  password: string;
};

export const signUp = async (_: unknown, { name, email, password }: User) => {
  try {
    const user = new User();
    user.email = email;
    user.name = name;
    user.password = password;

    const result = await user.save();
    return result;
  } catch (e) {
    return e;
  }
};

export const login = async (_: unknown, { email, password }: User) => {
  try {
    const user_result = await User.findOne({ email: email }).select(
      "+password"
    );

    const pass_check = await user_result.comparePassword(password);
    if (pass_check) {
      return {
        status: true,
        message: "Login successful",
        email: user_result.email,
        User: user_result,
      };
    }
  } catch (e) {
    return e;
  }
};

export const Upsert_Movie = async (
  _: unknown,
  { title, description, releaseYear, genre, imdb }: Movie
) => {
  try {
    const movie = await Movie.findOne({ imdb: imdb });
    if (movie) {
      //You have the movie in your Db Good to go
      return { status: true, movie: movie };
    } else {
      //Now you need to onboard your movie
      const new_movie = new Movie();
      new_movie.title = title;
      new_movie.description = description;
      new_movie.releaseYear = releaseYear;
      new_movie.genre = genre;

      new_movie.imdb = imdb;

      new_movie.save();
      return { status: true, movie: new_movie };
    }
  } catch (e) {
    return { status: e, error: e };
  }
};

export const Create_Wishlist_entry = async (
  _: unknown,
  { user_id, movie_id }: Wishlist
) => {
  try {
    const check = Wishlist.findOne({ user_id, movie_id });
    if (check) {
      return { status: false };
    } else {
      const entry = new Wishlist();
      entry.user_id = user_id;
      entry.movie_id = movie_id;
      entry.save();
    }
  } catch (e) {
    return { status: false };
  }
};

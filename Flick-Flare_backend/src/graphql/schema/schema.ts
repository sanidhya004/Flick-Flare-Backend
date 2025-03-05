export const graphQLSchema = `#graphql

type Query {
    hello: String

}

type Mutation {
    addPost(title: String!, content: String!): Post
    signUp(name:String!, email:String!, password:String!):User
    login(email:String!,password:String!):login
    Upsert_movie(title: String!, description: String!, releaseYear: Int!, genre: String!,imdb:String!):Upsert_movie
    wishlist_entry(user_id:String,movie_id:String):wishlist_entry


}

type User{
     name:String,
     email:String, 
     password:String
}

type Post {
    title: String
    content: String
}

type login{
     email:String,
     status:Boolean,
     User:User

 }

 type Movie{ 
    
    title: String,
  description: String,
  releaseYear: Int,
  genre: String,
  imdb: String
  
 
 }

 type Upsert_movie{
  title: String,
  description: String,
  releaseYear: Int,
  genre: String,
  imdb: String,
  status:Boolean,
  error:String,
  movie:Movie
}


type wishlist_entry{
   user_id:String,
   movie_id:String,
}
`;

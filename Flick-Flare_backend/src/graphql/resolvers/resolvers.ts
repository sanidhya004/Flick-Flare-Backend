
import { helloWord,newPost,signUp,login,Upsert_Movie,Create_Wishlist_entry} from "../../controllers/graphql.js";

export const graphQLResolver = {
    Query: {
        hello: helloWord,
    },
    Mutation: {
        addPost:newPost,
        signUp:signUp,
        login:login,
        Upsert_movie:Upsert_Movie,
        wishlist_entry:Create_Wishlist_entry
    },
};


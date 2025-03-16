import mongoose, { Schema, Document, Model } from "mongoose";


interface IWishlist{
    user_id:string,
    movie_id:String
}


const wishlist= new mongoose.Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },  // Correct ref
    movie_id: { type: Schema.Types.ObjectId, ref: "Movie", required: true }, // Correct ref
   
})


const Wishlist = mongoose.model<IWishlist>("Wishlist",wishlist);
export default Wishlist;
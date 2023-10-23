import mongoose from "mongoose";


const { ObjectId } = mongoose.Schema.Types;

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            requierd: [true, 'Title must be use ']
        },
        subTitle: String,
        catageroy: {
            type: String,
            requierd: [true, 'Title must be use ']
        },
        descripction: {
            type: String,
            requierd: [true, 'Title must be use ']
        },
        imageUrl: {
            type: String,
            requierd: [true, 'Title must be use ']
        },
        userId: {
            type: ObjectId,
            ref: 'User',
            requierd: [true, 'user id must be use']
        },
    },
    {
        timestamps: true
    }
)

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
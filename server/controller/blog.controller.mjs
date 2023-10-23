import Blog from "../models/blog.model.mjs";
import handleError from "../utils/errorHandler.mjs";
import flexibleQuery from "../utils/flexibleQuery.mjs";

export async function createBlog(req, res) {
    try {
        const blog = req.body;
        await Blog.create(blog);
        res.status(200).json({
            success: true,
            message: 'Blog successfully save'
        })


    } catch (error) {
        const message = handleError(error);
        res.status(400).json({
            success: false,
            message
        })
    }
}

export async function getBlogs(req, res) {

    try {
        const [filters, search] = flexibleQuery(req.query)
        const blogs = await Blog.find(filters)
            .skip(search.skip)
            .limit(search.limit)
            .select(search.fields)
            .sort(search.sortBy)
        res.status(200).json({
            success: true,
            blogs
        })


    } catch (error) {

        const message = handleError(error);
        res.status(400).json({
            success: false,
            message
        })
    }
}

export async function blogUpdate(req, res) {
    console.log(req.body);
    try {
        const option = {new: true, runValidators: true}
        const updateBody = req.body;
        const id = req.params.id;
        await Blog.findByIdAndUpdate(id, updateBody, option);

        res.status(200).json({ message: 'Blog post updated successfully' });
    } catch (error) {
        res.status(404).json({ message: 'Blog post not found' });
    }
}

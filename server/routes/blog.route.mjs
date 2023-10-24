import  express  from "express";
import { blogUpdate, createBlog, getBlogs } from "../controller/blog.controller.mjs";
import authentication from "../middleware/authentication.mjs";
import authorization from "../middleware/authorization.mjs";


const router = express.Router();

router.post('/create', authentication, authorization("admin", "moderator"), createBlog);
router.get('/list', getBlogs);
router.patch('/:id', blogUpdate);

export default router;
import React from "react";
import blogBanner from "../../assets/banner/blog-banner.png";
import Blogs from '../../../public/blogs.json';
import SingleBlog from "./SingleBlog";
import InnerBanner from "../../components/Shared/innerBanner/InnerBanner";

const Blog = () => {
  return (
    <>
      <InnerBanner title='Blog' name='Blog' />

      <section className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-20">
          {Blogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;

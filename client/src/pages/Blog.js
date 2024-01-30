import React, {useEffect, useState} from "react";

function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/blogs")
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error("Error:", error));
    }, []);

    return (
        <div className="Blog">
            {blogs.map(blog => (
                <li key={blog.id}>{blog.title}</li>
            ))}
        </div>
    )
}

export default Blog;
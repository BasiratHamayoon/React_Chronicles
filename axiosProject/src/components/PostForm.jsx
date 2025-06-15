import { useEffect, useState } from "react"
import { createPost } from "../API/PostApi";

export const PostForm = ({ data, setData, update}) => {
    const [addPost, setAddPost] = useState({
        title: "",
        body: ""
    });
    useEffect (() => {
        update && setAddPost({
            title: update.title || "",
            body: update.body || ""
        })
    }, [update])
    const handleAddData = (e) => {
        const { name, value } = e.target;
        setAddPost((prev) => {
            return {
                ...prev, [name]: value
            }
        });
        console.log(addPost)
    }
    const addPostData = async() => {
        const res = await createPost(addPost);
        console.log(res)
        if(res.status === 201) {
            setData([...data, res.data]);
            setAddPost({ title: "", body: ""});
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addPostData();
    }
    return (
        <>
            <form className="lg:flex lg:flex-row flex flex-col  justify-center items-center lg:gap-4 mt-4"
            onSubmit={handleSubmit}>
                <input type="text"
                 placeholder="Enter Title"
                 name="title"
                 required
                 value={addPost.title}
                 onChange={handleAddData}
                 className="bg-white outline-none px-2 lg:w-[300px] py-2" />
                 <input type="text"
                 placeholder="Enter Body"
                 name="body"
                 required
                  value={addPost.body}
                 onChange={handleAddData}
                 className="bg-white outline-none px-2 lg:w-[300px] py-2" />
                 <button type="submit" className="px-6 py-2 text-gray-900 bg-green-600 cursor-pointer hover:text-white">Add</button>
            </form>
        </>
    )
}
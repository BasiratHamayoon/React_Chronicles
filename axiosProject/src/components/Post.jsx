import { useEffect, useState } from "react";
import { deletePost, getPost } from "../API/PostApi";
import { PostForm } from "./PostForm";

export const Post  = () => {
    const [postData, setPostData] = useState([]);
    const [update, setUpdate] = useState({})
    const getPostData = async () => {
       try {
          const res = await getPost();
        console.log(res.data);
        setPostData(res.data)
       } catch (error) {
         console.log(error)
       }
      }
      useEffect (() => {
        getPostData()
      }, []);
      const handleDeletePost = async (id) => {
       try {
         const res = await deletePost(id);
        console.log(res);
        if (res.status === 200) {
            const updatePosts = postData.filter((item) => {
            return item.id !== id;
        });
        setPostData(updatePosts);
        }
        
       } catch (error) {
        console.log(error);
       }
      }
      const handleUpdatePost = (item) => setUpdate(item);
    return (
        <>
        <section className="w-full flex justify-center items-center bg-gray-800">
            <PostForm data={postData} setData={setPostData} update={update} setUpdate={setUpdate}/>
        </section>
        <section className="w-full flex justify-center items-center bg-gray-800">
            <ul className="grid lg:grid-cols-3 justify-center items-center gap-20 lg:px-20 md:px-10 px-2 py-10 bg-gray-800 text-gray-200 grid-cols-1">
                {
                    postData.map((item) => {
                        const { id, title, body } = item 
                        return (
                            <li key={id} className="text-[14px] bg-gray-900 px-6 py-6 flex flex-col gap-4">
                                <p>{id}</p>
                                <p>Title: {title}</p>
                                <p>Body: {body}</p>
                                <div className="flex gap-4">
                                    <button className="px-6 py-2 text-gray-900 bg-green-600 cursor-pointer hover:text-white" onClick={() => handleUpdatePost(item)}>Edit</button>
                                    <button className="px-6 py-2 text-gray-900 bg-red-600 cursor-pointer hover:text-white" onClick={() => handleDeletePost(id)}>Delete</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
        </>
    )
}
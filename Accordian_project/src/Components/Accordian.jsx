import { useEffect, useState } from 'react';
import  faqs from '../API/faqs.json';
import { FAQ } from './FAQ';
export const Accordian = () => {
    const [ data , setData ] = useState([]);
     const [ activeId, setActiveId ] = useState(false);
    useEffect (() => {
        setData(faqs);
    }, [])
    const handleShowAnswers = (id) => {
        setActiveId((prevId) => (prevId === id ? false : id));
    }
    return (
        <>
          <section className="flex flex-col justify-center items-center w-[80%] m-auto">
            <h1 className="text-[25px] text-green-400 font-bold border-b-[5px]">The Accordian</h1>
            <ul className='flex flex-col gap-4 w-full justify-center items-center m-auto pt-8'>
                {
                    data.map((item) => {
                        return (
                            <FAQ  key={item.id}
                             item={item}
                             isActive = {activeId === item.id}
                             onToggle={() => handleShowAnswers(item.id)}/>
                        )
                    })
                }
            </ul>
          </section>
        </>
    )
}
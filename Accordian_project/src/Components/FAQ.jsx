export const FAQ = ({ key, item, onToggle, isActive}) => {
   
  
    return (
        <>
            <li key={key} className='bg-black text-white w-full px-6 py-4 border-green-400 border-l-[5px]'>
                <div className='flex justify-between'>
                    <p>{item.question}</p>
                    <button className={`text-black px-4 cursor-pointer
                     ${isActive? "bg-red-500 text-white" : "bg-green-400"}`}
                    onClick={onToggle}>{isActive? "Close" : "Show"}</button>
                </div>
                <p>{isActive && item.answer}</p>
            </li>
        </>
    )
}
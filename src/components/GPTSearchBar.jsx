import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
function GPTSearchBar() {
  const langKey = useSelector(store=>store.config.lang)
  return (
    <div className='pt-[20%] flex justify-center relative'>
      <form action="" className='bg-black w-1/2 grid grid-cols-12 rounded-lg' >
        <input type="text" className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='m-4 py-2 mx-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar;
import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
function GPTSearch() {
  return (
    <div>
        <div className="absolute h-full w-full">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch

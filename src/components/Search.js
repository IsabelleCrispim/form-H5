import { BsSearch, BsCaretDownSquare,BsFillCheckCircleFill } from 'react-icons/bs'

const DropDown = () => {
    return (
       <div className= "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-2 ring-pink-200">
           <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className ="hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer px-4 py-2 text-sm text-gray-700">
                    <BsFillCheckCircleFill/>
                </div>
                <div className ="hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer px-4 py-2 text-sm text-gray-700">
                    <BsFillCheckCircleFill/>
                </div>
                <div className ="hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer px-4 py-2 text-sm text-gray-700">
                    <BsFillCheckCircleFill/>
                </div>
                <div className ="hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer px-4 py-2 text-sm text-gray-700">
                        <BsFillCheckCircleFill/>
                </div> 
            </div>

        </div>   
           
         
    )
}
const Search = () => {
    return (
        <div className="py-5">
            <div className="mt-1 relative rounded-md shadow-sm border">
                <div className ="absolute inset-y-0 left-0 pl-3 flex 
                items-center pointer-events-none">
                    <BsSearch />
                    <label htmlFor="query" className="sr-only" />
                </div>
                    <input type="text" name="query" id="query" value= {""} className="pl-8 rounded-md sm:text-sm block w-full" placeholder="Search" />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <div>
                    <button type="button" className=" justify-center px-4 py-2 text-sm border-2 sm:text-sm border-green-200 flex items-center
                        bg-green-400 
                        text-gray-100 
                        hover:bg-pink-400
                        hover:border-pink-200 focus:outline-none">Sort By<BsCaretDownSquare className="ml-2" />
                    </button>
                    <DropDown/>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
            
     
            
        
    )

    }


    export default Search
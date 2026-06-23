import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed inset-0 z-100 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4'>
        
        <form className='bg-white flex rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-100 transform transition-all animate-fade-in'>
            
            <img src={assets.regImage} alt="reg-img" className='w-1/2 object-cover hidden md:block' />
            
            {/* Right Form Side */}
            <div className='relative flex flex-col items-center md:w-1/2 md:p-10 p-6 w-full'>
                
                <div className='absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer group'>
                    <img src={assets.closeIcon} alt="close-icon" className='w-3.5 h-3.5 opacity-60 group-hover:opacity-90' />
                </div>

                <p className='font-bold mt-4 text-2xl text-slate-800 tracking-tight'>Register Your Hotel</p>
                <p className='text-slate-400 text-sm mt-1 mb-2'>Enter your property details below</p>

                {/* Hotel Name */}
                <div className='w-full mt-4'>
                    <label htmlFor="name" className='text-sm font-semibold text-slate-600 block mb-1.5'>
                        Hotel Name
                    </label>
                    <input 
                        type="text" 
                        id='name' 
                        placeholder='e.g. Grand Plaza Resort' 
                        className='bg-slate-50 border border-slate-200 focus:bg-white rounded-lg w-full px-3.5 py-2.5 text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-normal' 
                        required
                    />
                </div>

                {/* Phone */}
                <div className='w-full mt-4'>
                    <label htmlFor="contact" className='text-sm font-semibold text-slate-600 block mb-1.5'>
                        Phone Number
                    </label>
                    <input 
                        type="tel" 
                        id='contact' 
                        placeholder='+1 (555) 000-0000' 
                        className='bg-slate-50 border border-slate-200 focus:bg-white rounded-lg w-full px-3.5 py-2.5 text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-normal' 
                        required
                    />
                </div>

                {/* Address */}
                <div className='w-full mt-4'>
                    <label htmlFor="address" className='text-sm font-semibold text-slate-600 block mb-1.5'>
                        Address
                    </label>
                    <input 
                        type="text" 
                        id='address' 
                        placeholder='Street, Area, Landmark' 
                        className='bg-slate-50 border border-slate-200 focus:bg-white rounded-lg w-full px-3.5 py-2.5 text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-normal' 
                        required
                    />
                </div>

                {/* City Selection */}
                <div className='w-full mt-4 max-w-xs mr-auto'>
                    <label htmlFor='city' className='text-sm font-semibold text-slate-600 block mb-1.5'>
                       City
                    </label>
                    <div className="relative">
                        <select 
                            id="city" 
                            className='bg-slate-50 border border-slate-200 focus:bg-white rounded-lg w-full px-3.5 py-2.5 text-slate-700 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-normal appearance-none cursor-pointer' 
                            required
                        >
                            <option value="" className='text-slate-400'>Select City</option>
                            {cities.map((city) => (
                                <option value={city} key={city} className='text-slate-800'>{city}</option>
                            ))}
                        </select>
                        {/* Custom dropdown arrow marker indicator */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                
                {/* Premium Animated Button */}
                <button 
                    type="submit" 
                    className='bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-medium tracking-wide shadow-lg shadow-indigo-600/20 transition-all px-8 py-3 mr-auto mt-8 cursor-pointer rounded-xl'
                >
                    Register Property
                </button>
            </div>
        </form>
    </div>
  )
}

export default HotelReg
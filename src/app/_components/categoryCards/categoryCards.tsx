import { getAllCategory } from '@/Api/allCategory.ap';
import { MoveRight } from 'lucide-react';
import Slidering from '../categorySlider/categorySlider';

export default async function CategorySlider() {
    const {data} = await getAllCategory()
    
  return (
    <>
      <div className=''>
<div className="header w-[95%] mx-auto flex justify-between items-center">
 <div className="title my-10 flex gap-2 items-center">
          
          <span className='w-2 h-10 rounded-full bg-linear-to-t from-[#008059] to-[#00B276] block  '></span>
        <h2 className='text-3xl font-bold' >Shop By <span className='text-[#009966]'>Category</span> </h2>

        </div>
        <div className="show">
          <h3 className='text-green-500 flex gap-3 capitalize items-center text-lg hover:text-green-600 cursor-pointer'>view all categories <MoveRight /></h3>
        </div>
</div>
       <div className="slider py-4 my-4">
        <Slidering data={data}/>

       </div>

      </div>
    
    
    </>
  )
}

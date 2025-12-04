"use client"
import WindowWrapper from '@/hoc/WindowWrapper';
import useWindowStore from '@/store/window';
import React from 'react'
import WindowControls from './WindowControls';
import Image from 'next/image';

const ImgFile = () => {
    const { windows } = useWindowStore();
    const data = windows?.imgfile?.data;
    if (!data) return;
    const {imageUrl,description}=data;
    console.log(data);
    
  return (
    <>
    <div id='' className='flex justify-between p-3'>
        <WindowControls target="imgfile" />
        <h2 className='text-gray-500 font-bold'>Image File</h2>
        <span></span>
    </div>
    <div id='' className='p-0 flex items-center justify-center'>
        {imageUrl && <Image className='' height={800} width={800} src={imageUrl} alt="" />}
        <p className="">
            {description}
        </p>
    </div>
    </>
  )
}
const imgFileWindow=WindowWrapper(ImgFile,"imgfile")
export default imgFileWindow
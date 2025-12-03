"use client"
import WindowWrapper from '@/hoc/WindowWrapper'
import WindowControls from './WindowControls'

import { locations } from '@/data'
import useLocationStore from '@/store/location'
import Image from 'next/image'
import clsx from 'clsx'



const Finder = () => {
    const { setActiveLocation, activeLocation } = useLocationStore()
    return (
        <>
            <div className="flex p-2 h-full">

                <div className="sidebar bg-[#f6fbfc] border border-white p-3 gap-3 flex flex-col shadow-2xl rounded-3xl">
                    <div className="">
                        <WindowControls target="finder" />
                    </div>
                    <div className="p-0">
                        <h3 className='font-bold text-gray-500 text-md'>
                            Favorites
                        </h3>
                        <ul>
                            {Object.values(locations).map((item) => {
                                return (
                                    <li key={item.id} className={clsx(item.id == activeLocation.id ? "active" : "not-active")} onClick={() => setActiveLocation(item)}>
                                        <Image
                                            className={clsx(item.id == activeLocation.id ? "" : "filter brightness-0 saturate-100")} height={18} width={18} src={item.icon} alt="" />
                                        <p className='text-sm truncate font-medium'>{item.name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="">
                        <h3 className='font-bold text-gray-500 text-md'>
                            Work
                        </h3>
                         <ul>
                            {locations.work.children.map((item) => {
                                return (
                                    <li key={item.id} className={clsx(item.id == activeLocation.id ? "active" : "not-active")} onClick={() => setActiveLocation(item)}>
                                        <Image
                                            className={clsx(item.id == activeLocation.id ? "" : "filter brightness-0 saturate-100")} height={20} width={20} src={item.icon} alt="" />
                                        <p className='text-sm truncate font-medium'>{item.name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
const finderWindow = WindowWrapper(Finder, "finder")
export default finderWindow
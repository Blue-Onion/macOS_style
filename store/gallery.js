import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import {  photosLinks } from "@/data"

const defaultGalleryLocation=photosLinks;
export const useGalleryStore = create(immer((set)=>(
    {
        activeGalleryLocation:defaultGalleryLocation,
        setActiveGalleryLocation:(Gallerylocations=null)=>{
            set((state)=>{
                state.activeGalleryLocation=Gallerylocations;
            })
        },
        resetActiveGalleryLocation:()=>{
            set((state)=>{
                state.activeGalleryLocation=defaultGalleryLocation;
            })
        }
    }
)))
export default useGalleryStore;
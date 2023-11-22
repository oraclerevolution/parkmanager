import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
}

export interface SearchManufacturerProps {
    manufacturer: string
    setManufacturer: (manufacturer: string) => void
}

export interface PlaceProps {
    id: number,
    placeNumber: number,
    etage: number,
    availability: boolean,
    occupationTime: number,
    occupiedBy: number,
    createdAt: string,
    updatedAt: string
}
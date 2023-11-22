"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { PlaceProps } from '@/types'

interface PlaceCardProps {
    place: PlaceProps
}

const PlaceCard = ({ place }: PlaceCardProps) => {
    const { id, placeNumber, etage, availability, occupationTime, occupiedBy, createdAt, updatedAt } = place
    const dateString = createdAt;
    const newDate = new Date(dateString).toDateString()

    return (
        <div className='car-card group' key={id}>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>Numéro de parking: {placeNumber}</h2>
            </div>
            <p className='flex mt-6 text-[32px] font-extrabold'>
                {availability ? (
                    <span className='self-start text-[14px] font-semibold'>
                        Parking disponible
                    </span>
                ) : (
                    <span className='self-start text-[14px] font-semibold'>
                        Parking non disponible
                    </span>
                )}
            </p>
            {availability ? (
                <div className='relative w-full h-40 my-3 object-contain'></div>
            ) : (
                <div className='relative w-full h-40 my-3 object-contain'>
                    <Image
                        src="/hero.png"
                        fill
                        priority
                        className='object-contain'
                        alt='car model'
                    />
                </div>
            )}
            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-[14px]'>Etage: {etage}</p>
                    </div>
                    {occupationTime === 0 ? (
                        <>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <p className='text-[14px]'>libre</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <p className='text-[14px]'>jusqu'au:</p>
                                <p className='text-[14px]'>{newDate}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PlaceCard
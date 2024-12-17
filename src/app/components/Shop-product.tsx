import React from 'react'
import TopPicksCard from '../ui/top-picks'
import { Numans } from 'next/font/google'
import Pagination from '../ui/number'


function ShopProduct() {
  return (
    <div>
        
        <div className='flex gap-2 mt-5'>
        <TopPicksCard img="/4..png" description="Trenton modular sofa_3" />
        <TopPicksCard img="/5..png" description="Granite dining table with dining chair" />
        <TopPicksCard img="/6..png" description="Outdoor bar table and stool" />
        <TopPicksCard img="/7..png" description="Plain console with teak mirror" />
        </div>
        <div className='flex gap-2 mt-5'>
        <TopPicksCard img="/s-grain.png" description="Grain coffee table"  price="Rs. 15,000.00" />
        <TopPicksCard img="/s-cof.png" description="Kent coffee table"  price="Rs. 225,000.00"/>
        <TopPicksCard img="/s-round.png" description="Round coffee table_color 2"  price="Rs. 251,000.00"/>
        <TopPicksCard img="/s-teak.png" description="Reclaimed teak coffee table" price="Rs. 25,200.00" />
        </div>
        <div className='flex gap-2 mt-5'>
        <TopPicksCard img="/tble.png" description="Plain console_" price="Rs. 258,200.00" />
        <TopPicksCard img="/teak.png" description="Reclaimed teak Sideboard" price="Rs. 20,000.00" />
        <TopPicksCard img="/spg.png" description="SJP_0825 " price="Rs. 200,000.00" />
        <TopPicksCard img="/bella.png" description="Bella chair and table" price="Rs. 100,000.00" />
        </div>
        <div className='flex gap-2 mt-5'>
        <TopPicksCard img="/2..png" description="Granite square side table"  price="Rs. 258,800.00"/>
        <TopPicksCard img="/8..png" description="Asgaard sofa"  price="Rs. 250,000.00"/>
        <TopPicksCard img="/may.png" description="Maya sofa three seater "  price="Rs. 115,000.00"/>
        <TopPicksCard img="/out.png" description="Outdoor sofa set" price="Rs. 244,000.00" />
        </div>
        <div className='mt-14'>
            <Pagination />
        </div>
    </div>
  )
}

export default ShopProduct

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectQuotes } from './store/configureStore'
import { getQuote } from './store/quoteSlice'
import PinkBlob from './assets/blob-pink.svg'
import BlueBlob from './assets/blob-blue.svg'
import GreenBlob from './assets/blob-green.svg'
import RedBlob from './assets/blob-red.svg'
import Twitter from './assets/twitter.png'

function Quotes() {

    const dispatch = useDispatch()

    const data = useSelector(selectQuotes)
    const {quotes, quotes:{quote, author}} = data
    //console.log(quote, author)

    useEffect(() => {
      dispatch(getQuote())
    }, [dispatch])

    const getNewQuote = () =>{
        dispatch(getQuote())
    }

    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center bg-black" >
                <h1 className='text-white mb-5 relative z-20'>Random Quote Machine</h1>
                <div id="quote-box" className="relative z-20 p-5 md:p-7 text-white wrapper w-72 md:w-96 rounded-2xl">
                    <p id="text" className='font-bold text-center'>{quote}</p>
                    <span id="author" className="float-right my-5">- {author}</span>
                    <div className='flex justify-between items-center w-full mt-20'>
                        <a href="twitter.com/intent/tweet" id="tweet-quote">
                            <img src={Twitter} alt="twitter" className="w-8 h-8" />
                        </a>
                        <button onClick={getNewQuote} id='new-quote' className='bg-white text-slate-700 rounded-xl p-2 px-3'>New Quote</button>
                    </div>
                </div>
                <p className="text-center relative z-20 text-white mt-5">By Esther - Freecodecamp Project</p>
                {/* <img className='absolute z-10 w-1/2 -right-20' src={Blob} alt="" /> */}
                <img className='fixed z-10 w-20 top-8 left-10' src={PinkBlob} alt="" />
                <img className='fixed z-10 w-20 top-8 right-10' src={RedBlob} alt="" />
                <img className='fixed z-10 w-20 right-10 bottom-10' src={BlueBlob} alt="" />
                <img className='fixed z-10 w-20 left-10 bottom-10' src={GreenBlob} alt="" />
            </div>
        </>
    )
}

export default Quotes
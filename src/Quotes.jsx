import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectQuotes } from './store/configureStore'
import { getQuote } from './store/quoteSlice'
import PinkBlob from './assets/blob-pink.svg'
import BlueBlob from './assets/blob-blue.svg'
import GreenBlob from './assets/blob-green.svg'
import RedBlob from './assets/blob-red.svg'
import Twitter from './assets/twitter.png'
import Particles from "react-tsparticles";

function Quotes() {

    const dispatch = useDispatch()

    const data = useSelector(selectQuotes)
    const {quotes, quotes:{quote, author, loading}} = data
    console.log(quote, author, loading)

    useEffect(() => {
      dispatch(getQuote())
    }, [dispatch])

    const getNewQuote = () =>{
        dispatch(getQuote())
    }


    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center bg-black" >
                <Particles options={
                    {
                        "background": {
                            "color": {
                                "value": "#000000"
                            },
                            "position": "50% 50%",
                            "repeat": "no-repeat",
                            "size": "cover"
                        },
                        "interactivity": {
                          "events": {
                            "onClick": {
                              "enable": true,
                              "mode": "push"
                            },
                            "onHover": {
                              "mode": "repulse"
                            }
                          },
                          "modes": {
                            "bubble": {
                              "distance": 400,
                              "duration": 2,
                              "opacity": 0.8,
                              "size": 40
                            },
                            "grab": {
                              "distance": 400
                            },
                            "push": {
                              "groups": [
                                "z5000",
                                "z7500",
                                "z2500",
                                "z1000"
                              ]
                            }
                          }
                        },
                        "particles": {
                          "color": {
                            "animation": {
                              "h": {
                                "speed": 20
                              }
                            }
                          },
                          "groups": {
                            "z5000": {
                              "number": {
                                "value": 70
                              },
                              "zIndex": {
                                "value": 50
                              }
                            },
                            "z7500": {
                              "number": {
                                "value": 30
                              },
                              "zIndex": {
                                "value": 75
                              }
                            },
                            "z2500": {
                              "number": {
                                "value": 50
                              },
                              "zIndex": {
                                "value": 25
                              }
                            },
                            "z1000": {
                              "number": {
                                "value": 40
                              },
                              "zIndex": {
                                "value": 10
                              }
                            }
                          },
                          "links": {
                            "color": {
                              "value": "#ffffff"
                            },
                            "opacity": 0.4
                          },
                          "move": {
                            "angle": {
                              "value": 10
                            },
                            "attract": {
                              "rotate": {
                                "x": 600,
                                "y": 1200
                              }
                            },
                            "direction": "right",
                            "enable": true,
                            "outModes": {
                              "bottom": "out",
                              "left": "out",
                              "right": "out",
                              "top": "out"
                            },
                            "speed": 5
                          },
                          "number": {
                            "value": 100
                          },
                          "opacity": {
                            "animation": {
                              "speed": 3,
                              "minimumValue": 0.1
                            }
                          },
                          "zIndex": {
                            "value": 5,
                            "opacityRate": 0.5
                          }
                        },
                        "emitters": {
                          "autoPlay": true,
                          "fill": true,
                          "life": {
                            "wait": false
                          },
                          "rate": {
                            "quantity": 1,
                            "delay": 7
                          },
                          "shape": "square",
                          "startCount": 0,
                          "size": {
                            "mode": "percent",
                            "height": 0,
                            "width": 0
                          },
                          "particles": {
                            "shape": {
                              "type": "images",
                              "options": {
                                "images": {
                                  "src": "",
                                  "width": 500,
                                  "height": 634
                                }
                              }
                            },
                            "size": {
                              "value": 40
                            },
                            "move": {
                              "speed": 10,
                              "outModes": {
                                "default": "none",
                                "right": "destroy"
                              },
                              "straight": true
                            },
                            "zIndex": {
                              "value": 0
                            },
                            "rotate": {
                              "value": {
                                "min": 0,
                                "max": 360
                              },
                              "animation": {
                                "enable": true,
                                "speed": 10,
                                "sync": true
                              }
                            }
                          },
                          "position": {
                            "x": -5,
                            "y": 55
                          }
                        }
                      }
                } />
                <h1 className='text-white mb-5 relative z-20'>Random Quote Machine</h1>
                <div id="quote-box" className="relative z-20 p-5 md:p-7 text-white wrapper w-80 md:w-96 rounded-2xl">
                    <p id="text" className='font-bold text-center'>{quote}</p>
                    <span id="author" className="float-right my-5">- {author}</span>
                    <div className='flex justify-between items-center w-full mt-20'>
                        <a href="twitter.com/intent/tweet" target={'_blank'} id="tweet-quote">
                            <img src={Twitter} alt="twitter" className="w-8 h-8" />
                        </a>
                        <div className='flex items-center'>
                            <button onClick={getNewQuote} id='new-quote' className='bg-white text-slate-700 rounded-xl p-2 px-3'>New Quote</button>
                            { loading && <div className="lds-ripple"><div></div><div></div></div>}
                        </div>
                    </div>
                </div>
                <p className="text-center relative z-20 text-white mt-5">By Esther - Freecodecamp Project</p>
                {/* <img className='absolute z-10 w-1/2 -right-20' src={Blob} alt="" /> */}
                {/* <img className='fixed z-10 w-20 top-8 left-10 animate-bounce duration-1000 ease-in' src={PinkBlob} alt="" />
                <img className='fixed z-10 w-20 top-8 right-10' src={RedBlob} alt="" />
                <img className='fixed z-10 w-20 right-10 bottom-10' src={BlueBlob} alt="" />
                <img className='fixed z-10 w-20 left-10 bottom-10' src={GreenBlob} alt="" /> */}
            </div>
        </>
    )
}

export default Quotes
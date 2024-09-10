import React from 'react';
import { MdHomeFilled, MdSubscriptions, MdOutlineVideoLibrary, MdHistory, MdWatchLater } from 'react-icons/md';
import { FaRegThumbsUp } from 'react-icons/fa';
import { SiYoutubeshorts } from 'react-icons/si';
import { BsFire } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi2";
import { RiSurroundSoundLine } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Sidebar = () => {
    const mainLinks = [
        {
            icon: <MdHomeFilled className="text-xl" />,
            name: 'Home'
        },
        {
            icon: <SiYoutubeshorts className="text-xl" />,
            name: "Shorts"
        },
        {
            icon: <MdSubscriptions className="text-xl" />,
            name: "Subscriptions"
        }
    ];

    const otherLinks = [
        {
            icon: <MdOutlineVideoLibrary className="text-xl" />,
            name: 'Library'
        },
        {
            icon: <MdHistory className="text-xl" />,
            name: 'History'
        },
        {
            icon: <MdWatchLater className="text-xl" />,
            name: 'Watch Later'
        },
        {
            icon: <FaRegThumbsUp className="text-xl" />,
            name: 'Liked Videos'
        },
        {
            icon: <BsFire className="text-xl" />,
            name: 'Trending'
        },
        {
            icon: <RiSurroundSoundLine className="text-xl" />,
            name: 'Live'
        },
        {
            icon: <HiShoppingBag className="text-xl" />,
            name: 'Shopping'
        }
    ];

    const CONNECT = [
        {
            icon:<FaGithubSquare/>,
            name:'GITHUB'
        },
        {
            icon: <FaLinkedin/>,
            name: "Linkedin"
        },
        {
            icon:<IoIosMail/>,
            name:"Mail"
        }
    ]


  return (
    <div className='w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col border-b-2'>
        {mainLinks.map(
            ({icon,name}) => {
                return (
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-zinc-600" : " "} rounded-xl`}>
                        <a href='#' className='flex items-center gap-5'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                )
            }
        )}
      </ul>
      <ul className='flex flex-col border-b-2 '>
        {otherLinks.map(
            ({icon,name}) => {
                return (
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" : " "}`}>
                        <a href='#' className='flex items-center gap-5'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                )
            }
        )}
      </ul>
      <ul className='flex flex-col  '>
        {CONNECT.map(
            ({icon,name}) => {
                return (
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" : " "}`}>
                        <a href='#' className='flex items-center gap-5'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                )
            }
        )}
      </ul>
    </div>
  )
}

export default Sidebar

import { TbMenu } from "react-icons/tb"; 
 import { CiMenuBurger } from "react-icons/ci";
import React from 'react'
import Container from '../components/Container'
import whitewillImg from '../image/icon/whitewill.svg'
import moscowIcon from '../image/icon/moscow.svg'
const Header = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center">
            <div className='flex items-center gap-6'>
                <div>
                <img className="w-[65px]" src={whitewillImg} alt="" />
                <div className="text-white text-center">Whitewill</div>
                </div>
                <span className='text-white w-[140px] text-[10px]'>Агентство элитной недвижимости</span>
            </div>
            <div className="text-[#b4b3b3] flex items-center justify-between gap-[40px]">
                <div className="text-end text-[10px]">
                    Пресненская набережная, 6с2,
                    <br />
                    башня «Империя»,
                    <br />
                    3-й подъезд, офис 4315
                </div>
                <div className="text-end" >
                    <div className="text-[10px]">
                    <span className=" mr-3">Загородный</span><span className="text-white">Головной</span>
                    </div>
                    <div className="text-[20px] text-white">
                        +7(495)255-01-60
                    </div>
                    <div>
                        <span className="text-[7px]">
                        Сейчас работаем
                        </span>
                    </div>
                </div>
                <div className=" flex p-2 gap-3 border-[#767474] rounded-sm border-[1px] text-[10px]">
                    <img className=" w-[10px]" src={moscowIcon} alt="" />
                    <span>
                Москва
                    </span>
                </div>
                <div className="text-white text-[30px] ">
                    <TbMenu />
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Header

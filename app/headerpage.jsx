import Image from 'next/image'
import sty from './page.module.css'
export function Headerpage(){
    return(
        <>
        
        <div className={sty.nav}>
            <div className={sty.logo}>
            <Image src="/next.svg"
            width={80} height={80}/>
            </div>
            <ul className={sty.navas}>
                <li className={sty.navitem}>
                    <a href='/'>Home</a>
                </li>
                <li className={sty.navitem}>
                    <a href='/signup'>Signup</a>
                </li>
                <li className={sty.navitem}>
                    <a href='/signin'>Signin</a>
                </li>
            </ul>
        </div>
        </>
    )
}
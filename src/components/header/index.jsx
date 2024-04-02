import "./style.scss";
import {Container} from "@containers";
import Img from "@image/Img1.png"

const index = () => {
    return (
        <header className="bg-[#1C1E53] py-[15px]">    
            <Container>
                <nav className="flex justify-between items-center">
                    <img src={Img} alt="img" />
                    <ul className="flex gap-[40px] items-center">
                        <li><a className="text-white" href="/post">HOME</a></li>
                        <li><a className="text-white" href="/post">TENTANG KAMI</a></li>
                        <li><a className="text-white" href="/about">KURSUS</a></li>
                        <li><a className="text-white" href="/contact">FAQ</a></li>
                        <li><a className="text-white" href="/contact">BLOG</a></li>
                        <li><button className="px-[12px] py-[5px] border-white border rounded-lg text-white">Login</button></li>
                    </ul>
                </nav>
            </Container>
            
        </header>
    );
};

export default index;
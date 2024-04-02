import "./style.scss";
import clock from "@image/clock.svg"
import video from "@image/video.svg"
import group from "@image/group.svg"
import star from "@image/star.svg"


const index = ({ img, h3, p , li1 , li2 , li3 , rating}) => {
  return (
    <div className="bg-[#F4F6FC] w-[385px] h-[416px] relative">
      <ul className="flex flex-col gap-4">
        <li>
          <img src={img} alt="" />
        </li>
        <li className="w-[63px] h-[25px] bg-[#1C1E53] flex justify-center gap-1 absolute items-center rounded-lg right-0 top-[54%]">
            <img src={star} alt="" />
            <p className="text-white">{rating}</p>
        </li>
        <li className=" px-[16px]">
          <h3 className="text-[#282938] text-[24px]">{h3}</h3>
        </li>
        <li className="text-[16px] opacity-70 text-[#282938] px-[16px]">
          <p>{p}</p>
        </li>
        <li className="flex items-center justify-evenly px-[16px]">
            <div className="flex items-center gap-2">   
                <img src={clock} alt="" />
                <p>{li1} Jam</p>
            </div>
            <div className="flex items-center gap-2">
                <img src={video} alt="" />
                <p>{li2} Video</p>
            </div>
            <div className="flex items-center gap-2">
                <img src={group} alt="" />
                <p>{li3} Siswa</p>
            </div>
        </li>
      </ul>
    </div>
  );
};

export default index;

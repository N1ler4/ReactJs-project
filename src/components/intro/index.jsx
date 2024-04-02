import { InfoContainer } from "@containers";
import Img from "@image/Img2.png";

export default function index() {
  return (
    <section className="bg-[#1C1E53]">
      <InfoContainer>
        <div className="flex justify-center items-center gap-[50px]">
          <div className="flex flex-col gap-[30px]">
            <h1 className="w-[595px] text-[42px] font-semibold text-white">
              Bangun dan Wujudkan Cita Bersama EDUFREE
            </h1>
            <p className="w-[595px] text-white text-[16px] font-normal">
              EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
              online yang bertujuan untuk membantu kamu meraih cita di bidang
              teknologi.
            </p>
            <div className="flex items-center gap-[35px]">
              <button className="px-[15px] py-[7px] bg-[#FCD980] text-[#282938] rounded-lg">
                Lihat Kursus
              </button>
              <a href="#" className="text-white text-[16px]">
                Lihat Alur Belajar
              </a>
            </div>
          </div>
          <img src={Img} alt="" />
        </div>
      </InfoContainer>
    </section>
  );
}

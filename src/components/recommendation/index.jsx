import "./style.scss";
import Container from "@containers/container";
import Btn from "@ui/button";
import SecondCard from "@ui/card/secondCard.jsx";
import { Img15, Img16, Img17 } from "@image";

export default function rec() {
  return (
    <section className="text-[#282938]">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="w-[440px] text-[38px] font-semibold">
            Rekomendasi Kursus Untuk Kamu
          </h1>
          <div className="flex gap-[50px]">
            <button>Kategori &#8595; </button>
            <Btn>Lihat Semua</Btn>
          </div>
        </div>
        <br />
        <hr />
        <div className="flex justify-between py-[50px]">
          <SecondCard
            img={Img15}
            h3="Dasar Pemrograman WEB "
            p="Materi pembelajarn mengenai pembuatan website tingkat pemula"
            li1="4.5"
            li2="20"
            li3="1.900"
            rating="4.9"
          />
          <SecondCard
            img={Img16}
            h3="Digital Marketing 101"
            p="Materi mengenai strategi dan konsep marketing  pemula"
            li1="6.2"
            li2="32"
            li3="930"
            rating="4.9"
          />
          <SecondCard
            img={Img17}
            h3="Data Science Dasar"
            p="Materi pembelajaran mengenai dasar-dasar data science"
            li1="8"
            li2="46"
            li3="1.043"
            rating="4.9"
          />
        </div>
      </Container>
    </section>
  );
}

import "./style.scss";
import Card from "@ui/card";
import Container from "@containers/container";
import { Img8, Img9, Img10, Img11, Img13, Img14 } from "@image";

export default function Cards() {
  return (
    <section className="py-[100px]">
      <Container>
        <h1 className="text-[#282938] text-[38px] w-[640px] text-center mx-auto py-[40px]">Keuntungan Bergabung Dengan E-Learning EDUFREE</h1>
        <div className="flex flex-wrap gap-[42px] justify-between">
          <Card
            img={Img8}
            h3="Kursus Gratis"
            p="Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu"
          />
          <Card
            img={Img9}
            h3="Akses Selamanya"
            p="Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu lebih nyaman dan tidak terburu-buru "
          />
          <Card
            img={Img10}
            h3="Grup Konsultasi"
            p="Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan  dan kamu juga bisa mebuka diskusi baru "
          />
          <Card
            img={Img11}
            h3="Sertifikat dan Portofolio"
            p="Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portofolio dari project kursus yang telah diselesaikan"
          />
          <Card
            img={Img13}
            h3="Belajar Lebih Terarah"
            p="Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu"
          />
          <Card
            img={Img14}
            h3="Instruktur Berpengala"
            p="Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya"
          />
        </div>
      </Container>
    </section>
  );
}

import "./style.scss";
import Container from "@containers/container";
import { Img12 } from "@image";

export default function about() {
  return (
    <section>
      <Container>
        <div className="flex items-center py-[60px] justify-between">
          <div className="text-[#282938]">
            <h4 className="opacity-70 text-[18px] font-light py-4">Tentang Kami</h4>
            <h1 className="w-[624px] text-[38px] font-semibold">
              EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh
            </h1>
            <p className="opacity-60 font-light w-[622px] py-4">
              Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi
              kedepanya dalam bidang pendidikan
            </p>
          </div>
          <img src={Img12} alt="" />
        </div>
      </Container>
    </section>
  );
}

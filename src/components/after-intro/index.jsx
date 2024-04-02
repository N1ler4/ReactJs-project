import "./style.scss";
import AfterIntroContainer from "@containers/after-info-container";
import {Img3, Img4, Img5, Img6, Img7} from "@image"

export default function afterHeader() {
  return (
    <section className="bg-[#EEF4FA]">
      <AfterIntroContainer>
        <div className="flex justify-between">
          <ul className="flex gap-[40px]">
            <li>
              <h4>21.000+</h4>
              <p>Siswa terdaftar</p>
            </li>
            <li>
              <h4>100+</h4>
              <p>Instruktur Ahli</p>
            </li>
            <li>
              <h4>150+</h4>
              <p>Kursus Gratis</p>
            </li>
          </ul>
          <ul className="flex items-center gap-[32px]">
            <li className="flex items-center text-[#282938] font-semibold gap-2">
                <img src={Img3} alt="img" />
                <p>LOREM</p>
            </li>
            <li className="flex items-center text-[#282938] font-semibold gap-2">
                <img src={Img4} alt="img" />
                <p>DITLANCE</p>
            </li>
            <li className="flex items-center text-[#282938] font-semibold gap-2">
                <img src={Img5} alt="img" />
                <p>OWTHEST</p>
            </li>
            <li className="flex items-center text-[#282938] font-semibold gap-2">
                <img src={Img6} alt="img" />
                <p>NEOVASI</p>
            </li>
            <li className="flex items-center text-[#282938] font-semibold gap-2">
                <img src={Img7} alt="img" />
                <p>ONAGO</p>
            </li>
          </ul>
        </div>
      </AfterIntroContainer>
    </section>
  );
}

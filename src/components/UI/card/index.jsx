import "./style.scss";

const index = ({ img, h3, p }) => {
  return (
    <div className="bg-[#F4F6FC] p-[48px] w-[385px] h-[316px]">
      <ul className="flex flex-col gap-4">
        <li>
          <img src={img} alt="" />
        </li>
        <li>
          <h3 className="text-[#282938] text-[24px]">{h3}</h3>
        </li>
        <li className="text-[16px] opacity-70 text-[#282938]">
          <p>{p}</p>
        </li>
      </ul>
    </div>
  );
};

export default index;

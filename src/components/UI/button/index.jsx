import "./style.scss";

const Index = ({ children }) => {
  return (
    <button className="py-[10px] px-[42px] border-none bg-[#FCD980] border-2 rounded-lg">
      {children}
    </button>
  );
};

export default Index;

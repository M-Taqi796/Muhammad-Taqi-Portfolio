const SecondryBtn = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad_Taqi_Resume.pdf";
    link.download = "Muhammad_Taqi_Resume.pdf";
    link.click();
  };
  return (
    <button className="w-56 h-12 border border-[#4DD0E1] text-[#4DD0E1] text-2xl shadow-[4px_4px_0_0_#FFD166] hover:shadow-[0px_0px_0_0]" onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default SecondryBtn;

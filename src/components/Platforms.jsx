import web from "../assets/platforms/web.svg";
import android from "../assets/platforms/android.svg";
import ios from "../assets/platforms/ios.svg";
import mac from "../assets/platforms/mac.svg";
import windows from "../assets/platforms/windows.svg";

const Platforms = () => {
  return (
    <div className="flex justify-between mb-20">
      <img className="size-16" src={web} alt="" />
      <img className="size-16" src={android} alt="" />
      <img className="size-16" src={ios} alt="" />
      <img className="size-16" src={windows} alt="" />
      <img className="size-16" src={mac} alt="" />
    </div>
  );
};

export default Platforms;

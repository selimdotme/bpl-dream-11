import "./Banner.css";
import bannerImg from "../../assets/banner-main.png";
export default function Banner({handleBalance}) {
  return (
    <div className="flex items-center justify-center py-11 my-5 sora bg-img rounded-2xl">
      <div className="text-center">
        <div className="flex items-center justify-center">
        <img src={bannerImg} alt="" />
        </div>
        <h1 className="text-white my-4 text-3xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className=" text-white text-xl font-semibold text-center">Beyond Boundaries Beyond Limits</p>
        <div className="my-5">
          <button onClick={handleBalance} className="border-2 p-2 rounded-lg text-xl bg-[#E7FE29] border-[#E7FE29]">Claim Free Credit</button>
        </div>
      </div>
    </div>
  )
}

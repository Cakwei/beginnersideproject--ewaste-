import "../styles/article.css";
import {
  profileImage,
  selectionOpt,
  OfferFeatures,
} from "../constants/index.js";
export default function Article() {
  return (
    <>
      <main
        id="article"
        className={`relative col-start-1 col-end-2 row-start-2 row-end-3 grid min-w-[250px] grid-cols-3 bg-white dark:text-white grid-rows-[350px_auto_1fr_300px] dark:bg-black`}
      >
        <div
          id="main-title-container"
          className="col-start-1 col-end-4 row-start-1 row-end-2 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-[5rem] font-bold text-white">E-Waste</h1>
          <h5 className="text-[1.25rem] font-bold text-white">
            Recycle E-Waste, Protect the Future
          </h5>
        </div>
        <div
          id="description"
          className="col-start-1 col-end-4 row-start-2 row-end-3 flex flex-col items-center pt-[25px] pb-[25px]"
        >
          <p className="text-[2.25rem] font-bold">What we offer to you</p>
          <div class="carousel">
            {" "}
            <div className="group">
              {OfferFeatures.map((item) => (
                <div className="card" key={item.message}>
                  <span className={`${item.var} text-[50px]`}></span>
                  {item.message}
                </div>
              ))}
            </div>
            <div className="group">
              {OfferFeatures.map((item) => (
                <div className="card" key={item.var}>
                  <span className={`${item.var} text-[50px]`}></span>
                  {item.message}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="selection-container"
          className="col-start-1 col-end-4 row-start-3 row-end-4 flex w-[min(80%,725px)] flex-wrap justify-center gap-y-[25px] justify-self-center overflow-hidden"
        >
          {selectionOpt.map((item) => (
            <div
              key={item.label}
              className="mr-[20px] ml-[20px] flex h-[250px] shrink-0 grow-1 basis-[35%] flex-col items-center justify-between rounded-[15px] bg-[#66c569] text-center text-white"
            >
              <a href={item.href}>View More</a>
            </div>
          ))}
        </div>
        <div
          id="profile"
          className="col-start-1 col-end-4 row-start-4 row-end-5 flex flex-col items-center justify-center pt-[25px] pb-[25px]"
        >
          <p className="mb-[15px] text-4xl font-extrabold">Made by:</p>
          <a href="https://github.com/cakwei">
            <img
              className="w-[150px] translate-y-[5px] mix-blend-multiply transition-[0.5s] hover:scale-[1.05]"
              src={profileImage[0].src}
              alt={profileImage[0].alt}
            />
          </a>
        </div>
      </main>
    </>
  );
}

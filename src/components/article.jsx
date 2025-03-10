import "./article.css";
import { profileImage, selectionOpt } from "../constants/index.js";
export default function Article() {
  return (
    <>
      <main
        id="article"
        className="relative col-start-1 col-end-2 row-start-2 row-end-3 grid min-w-[250px] grid-cols-3 grid-rows-[350px_300px_1fr_300px]"
      >
        <div
          id="main-title-container"
          className="col-start-1 col-end-4 row-start-1 row-end-2 flex flex-col items-center justify-center bg-[profileImage[1].src] text-center"
        >
          <h1 className="text-[5rem] font-bold text-white">E-Waste</h1>
          <h5 className="text-[1.25rem] font-bold text-white">
            Recycle E-Waste, Protect the Future
          </h5>
        </div>
        <div
          id="description"
          className="col-start-1 col-end-4 row-start-2 row-end-3 mb-[25px] flex flex-col items-center"
        >
          <p className="mb-[15px] text-[2.25rem] font-bold">
            What we offer to you
          </p>
          <div class="carousel">
            <div class="group">
              <div class="card">
                <span class="material-symbols-outlined">location_on</span>
                Easy E-Waste Pickup
              </div>
              <div class="card">
                <span class="material-symbols-outlined">location_away</span>
                Nearby Recycling Centers
              </div>
              <div class="card">
                <span class="material-symbols-outlined">award_star</span>
                Rewards for Responsible Disposal
              </div>
              <div class="card">
                <span class="material-symbols-outlined">verified_user</span>
                Certified Recycling Partners
              </div>
            </div>
            <div class="group">
              <div class="card">
                <span class="material-symbols-outlined">location_on</span>
                Easy E-Waste Pickup
              </div>
              <div class="card">
                <span class="material-symbols-outlined">location_away</span>
                Nearby Recycling Centers
              </div>
              <div class="card">
                <span class="material-symbols-outlined">award_star</span>
                Rewards for Responsible Disposal
              </div>
              <div class="card">
                <span class="material-symbols-outlined">verified_user</span>
                Certified Recycling Partners
              </div>
            </div>
          </div>
        </div>
        <div
          id="selection-container"
          className="col-start-1 col-end-4 row-start-3 row-end-4 flex w-[min(80%,725px)] flex-wrap justify-center gap-y-[25px] justify-self-center overflow-hidden pt-[15px] pb-[15px]"
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
        <div id="profile">
          <p>Made by:</p>
          <a href="https://github.com/cakwei">
            <img
              className="h-[125px] w-[125px]"
              src={profileImage[0].src}
              alt={profileImage[0].alt}
            />
          </a>
        </div>
        <div
          id="chatbot"
          className="hidden"
          onClick="alert('Chatbot soon');"
        ></div>
      </main>
    </>
  );
}

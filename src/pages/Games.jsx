import React from 'react'
import { useNavigate } from 'react-router-dom';

const Games = () => {

  const navigate = useNavigate();
  const handleDownload = () => {
    navigate("/dowloaddata")
  }

  return (
    <div>
      <div className='container mx-auto justify-center flex'>
        <div className='gap-y-7 max-lg:gap-x-1 lg:gap-x-6 justify-center grid-cols-3 grid'>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 max-lg:translate-x-[-30px] lg:w-[400px] pt-10">
              <img
                src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238810/capsule_616x353.jpg?t=1701356409"
                alt="game photo"
                className="rounded-xl" />
            </figure>
            <div className="card-body flex pl-10 text-center">
              <h2 className="card-title">BattleField 5</h2>
              <div className="card-actions inline-block" >
                <a href="https://github.com/EshquvvatovAsliddin/CloudePhotos/raw/main/cloudeimg/apps/%5BEshkhuvvatoff%5D%20BattleField%205.torrent" download>
                  <button className="button" type="button">
                    <span className="button__text">Download</span>
                    <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 max-lg:translate-x-[-30px] lg:w-[400px] pt-10">
              <img
                src="https://i0.wp.com/rectifygaming.com/wp-content/uploads/2023/08/capsule_616x353-16.jpg?fit=616%2C353&ssl=1"
                alt="game photo"
                className="rounded-xl " />
            </figure>
            <div className="card-body flex pl-10 text-center">
              <h2 className="card-title">Counter-Strike Global Offensive</h2>
              <div className="card-actions inline-block" >
                <a href="https://github.com/EshquvvatovAsliddin/CloudePhotos/raw/main/cloudeimg/apps/%5BEshkhuvvatoff%5D%20CSGO.torrent" download>
                  <button className="button" type="button">
                    <span className="button__text">Download</span>
                    <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 lg:lg:w-[410px] pt-10">
              <img
                src="https://wallpapers.com/images/featured/gta-5-2560x1440-okvhzmmnmrw4x35b.jpg"
                alt="game photo"
                className="rounded-xl " />
            </figure>
            <div className="card-body flex pl-10 text-center">
              <h2 className="card-title">Gta V Premium Edition</h2>
              <div className="flex items-center">
                <div className="card-actions inline-block" >
                  <a href="https://github.com/EshquvvatovAsliddin/CloudePhotos/raw/main/cloudeimg/apps/%5BEshkhuvvatoff%5D%20Gta%20V.torrent"" download>
                    <button className="button" type="button">
                      <span className="button__text">Download</span>
                      <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                    </button>
                  </a>
                </div>
                <div className="card-actions inline-block" >
                  <button className="button" type="button" onClick={handleDownload}>
                    <span className="button__text text-[12px]">Data Download</span>
                    <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 lg:w-[410px] pt-10">
              <img
                src="https://images2.minutemediacdn.com/image/upload/c_crop,w_1200,h_675,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/esports_illustrated/01hzwhf5ghmffgxm618r.jpg"
                alt="game photo"
                className="rounded-xl " />
            </figure>
            <div className="card-body flex pl-10 text-center">
              <h2 className="card-title">Valorant</h2>
              <div className="flex items-center">
                <div className="card-actions inline-block" >
                  <a href="https://valorant.secure.dyn.riotcdn.net/channels/public/x/installer/current/live.live.ap.exe" download>
                    <button className="button" type="button">
                      <span className="button__text">Download</span>
                      <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 w-[410px] pt-10">
              <img
                src="https://wallpapers.com/images/hd/mountain-in-the-morning-2560x1440-minecraft-lpprgespotbi1cve.jpg"
                alt="game photo"
                className="rounded-xl " />
            </figure>
            <div className="card-body flex pl-10 text-center">
              <h2 className="card-title">Minecraft <span className='text-[10px] translate-y-1'>Tlauncher</span></h2>
              <div className="flex items-center">
                <div className="card-actions inline-block" >
                  <a href="https://dl2.tlauncher.org/f.php?f=files%2FTLauncher-Installer-1.5.1.exe" download>
                    <button className="button" type="button">
                      <span className="button__text">Download</span>
                      <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 w-[410px] pt-10">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/234/220/1000/genshin-impact-genshin-hd-wallpaper-preview.jpg"
                alt="game photo"
                className="rounded-xl " />
            </figure>
            <div className="card-body flex pl-10 text-center">
              <h2 className="card-title">Genshin Impact</h2>
              <div className="flex items-center">
                <div className="card-actions inline-block" >
                  <a href="https://download-porter.hoyoverse.com/download-porter/2024/08/14/GenshinImpact_install_202407301502.exe?trace_key=GenshinImpact_install_ua_d4602da8b8f2" download>
                    <button className="button" type="button">
                      <span className="button__text">Download</span>
                      <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Games
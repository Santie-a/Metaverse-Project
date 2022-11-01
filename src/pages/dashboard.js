import { useEffect, useState } from "react";
import Header from "../components/Header";
import dashboardInformation from "../data/dashboardInfo.json"
import imagesData from "../data/imagesData.json"
import SimpleImageSlider from "react-simple-image-slider";

export default function Dashboard() {
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)

    useEffect(() => {
        document.title = 'Metaverse Project'
    }, [])

    useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    const dashboardInfo = dashboardInformation[0]
    console.log(imagesData[0].images)

    return (
        <div className="bg-gray-background">
            <Header /> 
            <div className="container mt-2 mb-2 flex mx-auto max-w-screen-md justify-center items-center h-auto flex-col">
                <img src="/images/logo.png" alt="Logo" className="m-2 w-6/12"/>
                <div className="m-2 p-4 hover:bg-gray-background ease-in duration-100 rounded">
                    <h1 className="text-2xl font-bold text-gray-base text-center px-4 hover">
                        Q: {dashboardInfo.Introduction.Question}
                    </h1>
                    <hr className="m-3 w-auto opacity-50"/>
                    <p className="font-medium text-xl text-gray-base m-3 text-center">
                        {dashboardInfo.Introduction.Information}
                    </p>
                </div>
                <div className="m-2 p-4 hover:bg-gray-background ease-in duration-100 rounded">
                    <h1 className="text-2xl font-bold text-gray-base text-center px-4">WHAT IS THE METAVERSE?</h1>
                    <hr className="m-3 w-auto opacity-50"/>
                    <p className="font-medium text-xl text-gray-base m-3 text-center">
                        {dashboardInfo.Metaverse}
                    </p>
                    <div className="flex align-center justify-center mt-2">
                        <SimpleImageSlider
                            width={windowWidth < 800 ? windowWidth - 50 : windowWidth / 3}
                            height={350}
                            images={imagesData[0].images}
                            showBullets={true}
                            showNavs={true}
                            autoPlay={true}
                            autoPlayDelay={4.0}
                            navStyle={1}
                            navSize={40}
                        />
                    </div>
                </div>
                <div className="m-2 p-4 hover:bg-gray-background ease-in duration-100 rounded">
                    <h1 className="text-2xl font-bold text-gray-base text-center px-4">NON-FUNGIBLE TOKENS (NFT)</h1>
                    <hr className="m-3 w-auto opacity-50"/>
                    <p className="font-medium text-xl text-gray-base m-3 text-center">
                        {dashboardInfo.Nft}
                    </p>
                    <div className="flex align-center justify-center mt-2">
                        <SimpleImageSlider
                            width={windowWidth < 800 ? windowWidth - 50 : windowWidth / 3}
                            height={350}
                            images={imagesData[1].images}
                            showBullets={true}
                            showNavs={true}
                            autoPlay={true}
                            autoPlayDelay={4.0}
                            navStyle={1}
                            navSize={40}
                        />
                    </div>
                </div>
                <div className="m-2 p-4 hover:bg-gray-background ease-in duration-100 rounded">
                    <h1 className="text-2xl font-bold text-gray-base text-center px-4">TRADING</h1>
                    <hr className="m-3 w-auto opacity-50"/>
                    <p className="font-medium text-xl text-gray-base m-3 text-center">
                        {dashboardInfo.Trading}
                    </p>
                    <div className="flex align-center justify-center mt-2">
                        <div className="bg-blue-light rounded-full p-4 w-3/12 mx-auto align-center justify-center shadow-inner">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6/12 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>
                            <p className="font-bold text-gray-base mt-2 mb-2 mx-auto text-center">
                                Profitable
                            </p>
                        </div>
                        <div className="bg-blue-light rounded-full p-4 w-3/12 mx-auto align-center justify-center shadow-inner">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6/12 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="font-bold text-gray-base mt-2 mb-2 mx-auto text-center">
                                Valuable
                            </p>
                        </div>
                        <div className="bg-blue-light rounded-full p-4 w-3/12 mx-auto align-center justify-center shadow-inner">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6/12 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>

                            <p className="font-bold text-gray-base mt-2 mb-2 mx-auto text-center">
                                Accessible
                            </p>
                        </div>
                    </div>
                </div>
                <div className="m-2 p-4 hover:bg-gray-background ease-in duration-100 rounded">
                    <h1 className="text-2xl font-bold text-gray-base text-center px-4">METASOCCER</h1>
                    <hr className="m-3 w-auto opacity-50"/>
                    <p className="font-medium text-xl text-gray-base m-3 text-center">
                        {dashboardInfo.Metasoccer}
                    </p>
                    <div className="flex align-center justify-center mt-2">
                        <SimpleImageSlider
                            width={windowWidth < 800 ? windowWidth - 50 : windowWidth / 3}
                            height={350}
                            images={imagesData[2].images}
                            showBullets={true}
                            showNavs={true}
                            autoPlay={true}
                            autoPlayDelay={4.0}
                            navStyle={1}
                            navSize={40}
                        />
                    </div>
                </div>
                <div className="m-2 p-4 hover:bg-gray-background ease-in duration-100 rounded">
                    <h1 className="text-2xl font-bold text-gray-base text-center px-4">BLOCKCHAIN</h1>
                    <hr className="m-3 w-auto opacity-50"/>
                    <p className="font-medium text-xl text-gray-base m-3 text-center">
                        {dashboardInfo.Blockchain}
                    </p>
                    <div className="flex align-center justify-center mt-2">
                        <div className="bg-blue-light rounded-full p-4 w-3/12 mx-auto align-center justify-center shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6/12 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            <p className="font-bold text-gray-base mt-2 mb-2 mx-auto text-center">
                                Secure
                            </p>
                        </div>
                        <div className="bg-blue-light rounded-full p-4 w-3/12 mx-auto align-center justify-center shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6/12 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                            </svg>
                            <p className="font-bold text-gray-base mt-2 mb-2 mx-auto text-center">
                                Fast
                            </p>
                        </div>
                    </div>
                </div>
                <div className="m-2 p-4 hover:bg-gray-background ease-in duration-100 rounded">
                    <h1 className="text-2xl font-bold text-gray-base text-center px-4">HEADSETS</h1>
                    <hr className="m-3 w-auto opacity-50"/>
                    <p className="font-medium text-xl text-gray-base m-3 text-center">
                        {dashboardInfo.Headsets}
                    </p>
                    <div className="flex align-center justify-center mt-2">
                        <SimpleImageSlider
                            width={windowWidth < 800 ? windowWidth - 50 : windowWidth / 3}
                            height={350}
                            images={imagesData[3].images}
                            showBullets={true}
                            showNavs={true}
                            autoPlay={true}
                            autoPlayDelay={4.0}
                            navStyle={1}
                            navSize={40}
                        />
                    </div>
                </div>
                <div className="m-2 p-4 hover:bg-gray-background ease-in duration-100 rounded">
                    <h1 className="text-2xl font-bold text-gray-base text-center px-4">SCENARIOS</h1>
                    <hr className="m-3 w-auto opacity-50"/>
                    <p className="font-medium text-xl text-gray-base m-3 text-center">
                        {dashboardInfo.Scenarios}
                    </p>
                    <div className="flex align-center justify-center mt-2">
                        <SimpleImageSlider
                            width={windowWidth < 800 ? windowWidth - 50 : windowWidth / 3}
                            height={350}
                            images={imagesData[5].images}
                            showBullets={true}
                            showNavs={true}
                            autoPlay={true}
                            autoPlayDelay={4.0}
                            navStyle={1}
                            navSize={40}
                        />
                    </div>
                </div>
                <div className="m-2 p-4 hover:bg-gray-background ease-in duration-100 rounded">
                    <h1 className="text-2xl font-bold text-gray-base text-center px-4">AR & HOLOGRAMS</h1>
                    <hr className="m-3 w-auto opacity-50"/>
                    <p className="font-medium text-xl text-gray-base m-3 text-center">
                        {dashboardInfo["AR&Holograms"]}
                    </p>
                    <div className="flex align-center justify-center mt-2">
                        <SimpleImageSlider
                            width={windowWidth < 800 ? windowWidth - 50 : windowWidth / 3}
                            height={350}
                            images={imagesData[4].images}
                            showBullets={true}
                            showNavs={true}
                            autoPlay={true}
                            autoPlayDelay={4.0}
                            navStyle={1}
                            navSize={40}
                        />
                    </div>
                </div>
                <div className="m-2 p-4 hover:bg-gray-background ease-in duration-100 rounded">
                    <h1 className="text-2xl font-bold text-gray-base text-center px-4">PSYCHOLOGY</h1>
                    <hr className="m-3 w-auto opacity-50"/>
                    <p className="font-medium text-xl text-gray-base m-3 text-center">
                        {dashboardInfo.Pyschology}
                    </p>
                    <div className="flex align-center justify-center mt-2">
                        <div className="bg-blue-light rounded-full p-4 w-3/12 mx-auto align-center justify-center shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6/12 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                            </svg>
                            <p className="font-bold text-gray-base mt-2 mb-2 mx-auto text-center">
                                Pros
                            </p>
                        </div>
                        <div className="bg-blue-light rounded-full p-4 w-3/12 mx-auto align-center justify-center shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6/12 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>

                            <p className="font-bold text-gray-base mt-2 mb-2 mx-auto text-center">
                                Cons
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
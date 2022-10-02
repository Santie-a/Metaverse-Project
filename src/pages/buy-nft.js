import { useEffect, useContext, useState } from "react";
import Header from "../components/Header";
import Team from "../components/Team";
import UserContext from "../context/user";
import teamsData from "../data/teamsData.json"

export default function BuyNFT() {
    const [ error, setError ] = useState("")
    const [ selection, setSelection ] = useState("")
    const [ currencies, setCurrencies ] = useState(500)
    const [ teams, setTeams ] = useState(teamsData)
    const [ finalTeam, setFinalTeam ] = useState("")
    
    const { user } = useContext(UserContext)
    const [ isInvalid, setisInvalid ] = useState(user ? (false) : (true) || selection === "")

    useEffect(() => {
        document.title = 'Metaverse Project - Buy NFT'
    }, [])

    function toggle(id) {
        if (id === selection) {
            setSelection(0)
        } else {
            setSelection(id)
        }
        setTeams(prevTeams => {
            return prevTeams.map((team) => {
                return team.id === id ? {...team, selected: !team.selected} : {...team, selected: false}
            })
        })
    }

    function processBuy() {
        console.log("buying", teams[selection - 1].name)
        setCurrencies(prevCurrencies => {
            return prevCurrencies - teams[selection - 1].price
        })
        setFinalTeam(selection)
    }

    function handleBuy() {
        if (selection === 0 || selection === "") {
            setError("Select One Team")
        } else { 
            processBuy()
            setError("")
            setisInvalid(true)
        }
    }

    const teamsRender = teams.map(item => {
        return (
            <Team 
                img={item.img}
                name={item.name}
                id={item.id}
                price={item.price}
                selected={item.selected}
                toggle={() => toggle(item.id)}
            />
        )
    })

    return (
        <div className="bg-gray-background">
            <Header />
            <div
                className="container flex mx-auto max-w-screen-md justify-center items-center h-auto flex-col"
            >
                <h1 className="text-2xl font-bold text-gray-background mb-4">BUY YOUR TEAM NFT</h1>
                <div className="flex bg-white justify-center items-center border border-gray-primary rounded p-4 mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 gray-base mr-3"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                    </svg>
                    <h2
                        className="text-2xl font-bold text-gray-base"
                    >
                        MSC: {currencies}
                    </h2>
                </div>
                <div className="grid grid-cols-3 grid-flow-row">
                    {teamsRender}
                </div>
                {error && <p className="m-2 text-xs text-red-primary">Error: {error}</p>}
                <button
                    className={
                    `m-2 bg-blue-medium text-white w-8/12 rounded h-8 font-medium ease-in duration-300
                    ${isInvalid && ' opacity-50'} ${!isInvalid && ' cursor-pointer'}`
                    }
                    disabled={isInvalid}
                    onClick={handleBuy}
                >
                    Buy NFT
                </button>
            </div>
            {finalTeam &&
                <div className="container bg-white flex mx-auto max-w-screen-md justify-center items-center h-auto flex-col border border-gray-primary rounded p-5">
                    <div className="flex p-4 border border-gray-primary rounded">
                        <h1 className="text-2xl font-bold text-gray-base">Operation Successful!</h1>
                    </div>
                    <div className="flex m-2 p-2 items-center justify-center">
                        <div className="m-2 p-5 w-6/12 border border-gray-primary rounded">
                            <img
                                src={teams[finalTeam - 1].img}
                                alt="Shield"
                                className=""
                            />
                        </div>
                        <div className="flex flex-col w-6/12 items-center justify-center border m-2 p-5 border-gray-primary rounded">
                            <h1 className="text-2xl font-bold">Team</h1>
                            <p className="text-2xl justify-center">{teams[finalTeam - 1].name}</p>
                            <h1 className="text-2xl font-bold mt-2">Price</h1>
                            <p className="text-2xl">{teams[finalTeam - 1].price} MSC</p>
                            <p className="text-xl">Now you have your own team! Go to the metasoccer section</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
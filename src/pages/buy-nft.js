import { useEffect, useContext, useState } from "react";
import Header from "../components/Header";
import Team from "../components/Team";
import UserContext from "../context/user";
import teamsData from "../data/teamsData.json"

export default function BuyNFT() {
    const [ error, setError ] = useState("")
    const [ selection, setSelection ] = useState("")
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
        console.log(window.innerHeight)
        setFinalTeam(selection)
        window.scrollTo({ top: 0, behavior: 'smooth' })
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
            {finalTeam &&
                <div className="container bg-white mt-2 mb-2 flex mx-auto max-w-screen-md justify-center items-center h-auto flex-col border border-gray-primary rounded p-5 shadow-inner">
                    <div className="flex p-4 border border-gray-primary rounded shadow-inner">
                        <h1 className="text-2xl font-bold text-gray-base">Team selected!</h1>
                    </div>
                    <div className="flex m-2 p-2 items-center justify-center">
                        <div className="m-2 p-5 w-6/12 border border-gray-primary rounded shadow-inner">
                            <img
                                src={teams[finalTeam - 1].img}
                                alt="Shield"
                                className=""
                            />
                        </div>
                        <div className="flex flex-col w-6/12 shadow-inner text-center items-center justify-center m-2 p-5 border border-gray-primary rounded">
                            <h1 className="text-2xl font-bold">Team</h1>
                            <p className="text-2xl justify-center text-gray-base mt-2 mb-2">{teams[finalTeam - 1].name}</p>
                            <p className="text-xl">Now you have your own team! Go to the auction section.</p>
                        </div>
                    </div>
                </div>
            }
            <div
                className="container flex mx-auto max-w-screen-md justify-center items-center h-auto flex-col"
            >
                <h1 className="text-2xl font-bold text-gray-background mb-4">SELECT YOUR TEAM</h1>
                <div className="grid grid-cols-3 grid-flow-row">
                    {teamsRender}
                </div>
                {error && <p className="m-2 text-xs text-red-primary">Error: {error}</p>}
                <button
                    className={
                    `m-2 bg-blue-medium text-white w-8/12 rounded h-12 font-medium ease-in duration-300
                    ${isInvalid && ' opacity-50'} ${!isInvalid && ' cursor-pointer'}`
                    }
                    disabled={isInvalid}
                    onClick={handleBuy}
                >
                    Buy NFT
                </button>
            </div>
            
        </div>
    )
}
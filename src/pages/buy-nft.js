import { useEffect, useContext, useState } from "react";
import Header from "../components/Header";
import Team from "../components/Team";
import UserContext from "../context/user";
import teamsData from "../data/teamsData.json"

export default function BuyNFT() {
    const [ error, setError ] = useState("")
    const [ selection, setSelection ] = useState("")
    const [ teams, setTeams ] = useState(teamsData)
    const { user } = useContext(UserContext)
    const isInvalid = user ? (false) : (true) || selection === ""

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
        console.log("buying")
    }

    function handleBuy() {
        selection === 0 || selection === "" ?
            setError("Select One Team") : 
            processBuy()
            setError("")
        }

    const teamsRender = teams.map(item => {
        return (
            <Team 
                img={item.img}
                name={item.name}
                id={item.id}
                selected={item.selected}
                toggle={() => toggle(item.id)}
            />
        )
    })

    return (
        <div className="bg-gray-background">
            <Header />
            <div className="container flex mx-auto max-w-screen-md justify-center items-center h-auto flex-col">
                <h1 className="text-2xl font-bold text-gray-base mb-4">BUY YOUR TEAM NFT</h1>
                <div className="grid grid-cols-3 grid-flow-row">
                    {teamsRender}
                </div>
                <p className="mb-4 text-xs text-red-primary">{error}</p>
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
        </div>
    )
}
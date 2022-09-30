import { useEffect } from "react";
import Header from "../components/Header";

export default function Dashboard() {
    useEffect(() => {
        document.title = 'Metaverse Project'
    }, [])

    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid">
                <p> Dashboard</p>
            </div>
        </div>
    )
}
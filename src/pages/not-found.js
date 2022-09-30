import { useEffect } from "react"

export default function NotFound() {
    useEffect(() => {
        document.title = "Not Found - Metaverse Project"

    }, [])
    
	return (
		<div className="app bg-gray-background">
            <div className="mx-auth max-w-screen-lg">
                <p className="text-center text-2xl">Not found!</p>
            </div>                
        </div>
	)
}
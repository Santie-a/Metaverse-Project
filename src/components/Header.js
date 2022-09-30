import { useContext } from "react"
import { Link } from 'react-router-dom'
import FirebaseContext from "../context/firebase"
import UserContext from "../context/user"
import * as ROUTES from '../constants/routes'

export default function Header() {
    const { firebase } = useContext(FirebaseContext)
    const { user } = useContext(UserContext)

	return (
        <header className="h-16 bg-white border-b rounded border-gray-primary mb-8">
            <div className='container mx-auto max-w-screen-lg h-full'>
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer hover:opacity-70 ease-in duration-100">
                        <h1 className="flex justify-center w-full">
                            <Link to={ROUTES.DASHBOARD} aria-label="Metaverse Logo">
                                <img src="/images/logo.png" alt="Logo" className="m-2 h-14"/>
                            </Link>
                        </h1>
                    </div>
                    <div className="text-gray-700 text-center flex items-center align-items">
                        {user? (
                            <>
                                <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor" 
                                        className="w-8 h-6 mr-6 hover:opacity-40 ease-in duration-100"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                        />
                                    </svg>
                                </Link>

                                <Link to={ROUTES.BUY_NFT} aria-label="Buy NFT">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-8 h-6 mr-6 hover:opacity-40 ease-in duration-100"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>
                                </Link>

                                <button
                                    type="button"
                                    title="Sign Out"
                                    onClick={() => {
                                        firebase.auth().signOut()
                                        window.location.reload()
                                    }}
                                    onKeyDown={(event) => {
                                        if (event.keyCode === 'Enter') {
                                            firebase.auth().signOut()
                                        }
                                        window.location.reload()
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-8 h-6 mr-6 hover:opacity-40 ease-in duration-100"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                        />
                                    </svg>
                                </button>
                                <div className="flex items-center cursor-pointer">
                                    <Link to={`/p/${user.displayName}`}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="w-8 h-6 mr-6 hover:opacity-40 ease-in duration-100"
                                        >
                                            <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to={ROUTES.LOGIN}>
                                    <button type="button" className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8 mr-6 ease-in duration-100 hover:opacity-70">
                                        Log In
                                    </button>
                                </Link>
                                <Link to={ROUTES.SIGN_UP}>
                                    <button type="button" className="font-bold text-sm border rounded text-blue-medium w-20 h-8 mr-6 ease-in duration-100 hover:opacity-70">
                                        Sign Up
                                    </button>
                                </Link>
                            </>
                        )                            
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
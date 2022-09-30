import { Link, useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import { useContext, useEffect, useState } from 'react';
import * as ROUTES from "../constants/routes"
import { doesUsernameExist } from '../services/firebase';

export default function SignUp() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)

    const [ username, setUsername ] = useState('')
    const [ fullName, setFullName ] = useState('')

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    const isInvalid = password === '' || emailAddress === '' || username === '' || fullName === ''

    const handleSignUp = async(event) => {
        event.preventDefault()

        const usernameExists = await doesUsernameExist(username)
        if (!usernameExists.length) {
            try {
                const createdUserResult = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(emailAddress, password)

                await createdUserResult.user.updateProfile({
                    displayName: username
                })
                await firebase.firestore().collection('users').add({
                    userId: createdUserResult.user.uid,
                    username: username.toLowerCase(),
                    fullName,
                    emailAddress: emailAddress.toLowerCase(),
                    currencies: 5000,
                    dateCreated: Date.now(),
                })

                history.push(ROUTES.DASHBOARD)
                window.location.reload()
            } catch (error) {
                setUsername('')
                setFullName('')
                setPassword('')
                setEmailAddress('')
                setError(error.message)
            }
        } else {
            setError('That username is already taken, please try another.')
        }
    }

    useEffect(() => {
        document.title = 'Sign Up - Metaverse Project'
    }, [])

	return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-auto m-1 p-1">
                <img
                    src="/images/metaverse2.png"
                    alt='Metaverse'
                />
            </div>
            <div className="flex flex-col w-auto m-1 p-1 mr-5">
                <div className="flex flex-col mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="Logo" classname="mt-2 w-6/12 mb-4"/>
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                    <form onSubmit={handleSignUp} method="POST">
                        <input 
                            aria-label="Enter your username"
                            type="text"
                            placeholder="Username"
                            className="shadow-inner text-sm text-gray-base w-full mr-3 py-5 px-4 h-4 mt-5 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setUsername(target.value)}
                            value={username}
                        />
                        <input 
                            aria-label="Enter your full name"
                            type="text"
                            placeholder="Full Name"
                            className="shadow-inner text-sm text-gray-base w-full mr-3 py-5 px-4 h-4 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setFullName(target.value)}
                            value={fullName}
                        />
                        <input 
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email address"
                            className="shadow-inner text-sm text-gray-base w-full mr-3 py-5 px-4 h-4 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setEmailAddress(target.value)}
                            value={emailAddress}
                        />
                        <input 
                            aria-label="Enter your password"
                            type="password"
                            placeholder="Password"
                            className="shadow-inner text-sm text-gray-base w-full mr-3 py-5 px-4 h-4 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setPassword(target.value)}
                            value={password}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={
                                `bg-blue-medium text-white w-full rounded h-8 font-medium ease-in duration-300
                                ${isInvalid && ' opacity-50'} ${!isInvalid && ' cursor-pointer'}`
                            }>
                                Sign Up
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary rounded">
                    <p className="text-sm">Have an account?{` `}
                            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
                                Log In
                            </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
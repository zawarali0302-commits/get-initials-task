import { useEffect, useState } from "react"
import type { User } from "../App";
interface GetInitialsComponentProps {
    user: User;
}
const GetInitialsComponent = ({ user }: GetInitialsComponentProps) => {
    const [result, setResult] = useState<string>("")

    useEffect(() => {
        const fullName = user.name
        if (fullName) {
            const [firstName, LastName] = fullName.split(" ");
            const firstArr = [...firstName];
            const secondArr = [...LastName];
            console.log(firstArr)
            setResult(firstArr[0] + secondArr[0])
        }
    })
    return (
        <div className="flex p-4">
            <div className="flex gap-2 w-96 h-32 border-gray-500 rounded shadow">
                <div className="flex w-1/3 items-center justify-center">
                    <div className="flex items-center justify-center rounded-full bg-blue-300 size-20">
                        <h1 className="text-4xl text-blue-800">{result}</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-2/3">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <h2 className="text-gray-400">{user.designation}</h2>
                    <h3 className="text-gray-400 text-sm">ID: {user.id}</h3>
                </div>
            </div>
        </div>

    )
}

export default GetInitialsComponent

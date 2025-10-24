import type { User } from "../App";
interface GetInitialsComponentProps {
    user: User;
}
const GetInitialsComponent = ({ user }: GetInitialsComponentProps) => {
    const getInitials = (name:string):string => {
         if (name.includes(" ")) {
             const [firstName, lastName] = name.split(" ");
             const firstArr = [...firstName];
             const secondArr = [...lastName];
            return (firstArr[0] + secondArr[0]).toUpperCase();
            }
            else{
                const arr = [...name]
                return arr[0].toUpperCase();
            }
    }
    return (
        <div className="flex p-4">
            <div className="flex gap-2 w-96 h-32 border-gray-500 rounded shadow">
                <div className="flex w-1/3 items-center justify-center">
                    <div className="flex items-center justify-center rounded-full bg-blue-300 size-20">
                        <h1 className="text-4xl text-blue-800">{getInitials(user.name)}</h1>
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

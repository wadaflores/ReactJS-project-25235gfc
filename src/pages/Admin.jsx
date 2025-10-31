import { LoadUserButton } from '../components/LoadUserButton';
import { UserCard } from '../components/UserCard';


export default function Admin(){
    return (
        <>
            <h2 className="my-4">Admin Page</h2>
            <UserCard/>
            <LoadUserButton/>
        </>
    )
}
import RandomUser from "../components/RandomUser";

export default function Clients(){
    return (
        <>
            <h2 className="mt-4">Clients of the Month</h2>
            <div className="random-user">
                {[...Array(8)].map((_, i) => {
                    return <RandomUser key={i}/>
                })}
            </div>
        </>
    )
}
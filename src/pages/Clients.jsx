import RandomUser from "../components/RandomUser";

export default function Clients(){
    return (
        <>
            <h2 className="mt-4">Clients of the Month</h2>
            <div className="d-flex flex-row">
                <RandomUser/>
                <RandomUser/>
                <RandomUser/>
                <RandomUser/>
            </div>
            <div className="d-flex flex-row p-0 m-0">
                <RandomUser/>
                <RandomUser/>
                <RandomUser/>
                <RandomUser/>
            </div>
        </>
    )
}
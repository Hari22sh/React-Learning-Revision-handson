export const CandidateProfile = () => {
    const name = "Harish"
    const age = 23
    const presentYear = 2026
    const birthYear = 2002
    return (
        <div>
            <h2>Candidate Profile</h2>
            <p>Name: {name}</p>
            <p>Age: {presentYear - birthYear}</p>
            <p>Email: {name}@gmail.com</p>
        </div>
    )
}
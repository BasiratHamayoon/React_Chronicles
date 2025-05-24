import { ProfileChild } from "./ProfileChild";
export const Profile = () => {
    const name = "Alice";
    const age = 21
    return (
        <>
           <ProfileChild name = {name} age= {age}>
            <p>Hello Alice</p>
           </ProfileChild>
        </>
    )
}
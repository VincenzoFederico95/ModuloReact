import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
    const [username, setUsername] = useState('')

    function handleInputChange(e) {
    setUsername(e.target.value)
    }
    
    return (
        <div>
            <input name="username" type="text" value={username} onChange={handleInputChange} />
            <Welcome name = {username}/>
        </div>
    )

}
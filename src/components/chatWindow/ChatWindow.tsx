import React from "react";
import styles from "./ChatWindow.module.css"
import {UserName} from "./UserName";
import {UserMessage} from "./UserMessage";
import {Time} from "./Time";
import {PhotoUser} from "./PhotoUser";

function ChatWindow() {
    return (
        <div className={styles.chatWindow}>
            <div className={styles.photoUser}>
                <PhotoUser/>
            </div>
            <div className={styles.infoUser}>
                <UserName/>
                <UserMessage/>
                <Time/>
            </div>
        </div>
    )
}

export default ChatWindow
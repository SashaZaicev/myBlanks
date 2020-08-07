import React from "react";
import styles from "./ChatWindow.module.css"
import photo from "../../img/smile3.png"

export function PhotoUser() {
    return (
        <div className={styles.editPhotoUser}>
            <img src={photo}/>
        </div>
    )
}
import React, {useEffect} from 'react';
import classes from "./Logout.module.scss"

export default function({showFunc, currentRef}) {
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (currentRef.current && !currentRef.current.contains(event.target)) {
				showFunc(false);
			}
		}
		document.addEventListener('click', handleClickOutside);
		return () => {
				document.removeEventListener('click', handleClickOutside);
		}
	}, [currentRef])

	const handleClickLogout = () => {
		localStorage.removeItem("token")
		localStorage.removeItem("lifeTimeToken")
		window.location.reload();
	}

	return(
		<div className={classes.containter} ref={currentRef}>
			<div className={classes.body} onClick={() => handleClickLogout()}>
				<span>Выйти</span>
			</div>		
		</div>
	)
}
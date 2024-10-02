function Menu() {
    const teamUser = localStorage.getItem("teamUser");
    return (
        <div>
            <p>------- MENU------------- {teamUser}</p>
        </div>
    )

}

export default Menu
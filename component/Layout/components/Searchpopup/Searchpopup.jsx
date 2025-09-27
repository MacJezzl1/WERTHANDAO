import React, { useEffect, useState } from 'react'

const Searchpopup = () => {
    const [search, setSearch] = useState()

    return (
        <>
            <div className="search-popup">
                <button className="close-search style-two"><i className="fas fa-times"></i></button>
                <button className="close-search"><i className="fas fa-arrow-up"></i></button>
                <form method="post" action="#">
                    <div className="form-group">
                        <input type="search" name="search-field" placeholder="Search Here" onChange={(e) => setSearch(e.target.value)} />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Searchpopup
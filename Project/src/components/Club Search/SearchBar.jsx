
function SearchBar({updateClubs})
{
    function handleSearch(e)
    {
        console.log(e.target.value);
        updateClubs(e.target.value);
    }
    return (
            <input type="text" onChange={handleSearch}/>
    );
}

export default SearchBar;
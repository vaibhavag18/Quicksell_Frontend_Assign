import React from 'react';
import './header.css'
import DropdownMenu from '../Dropdowns/DropdownMenu';  


function Header({ grouping, setGrouping, ordering, setOrdering }: { grouping: string, setGrouping: (grouping: string) => void, ordering: string, setOrdering: (ordering: string) => void }) {

    return (
        <header>
            <DropdownMenu grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
        </header>
    );
}

export default Header;

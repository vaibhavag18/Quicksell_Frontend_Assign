import React, { useCallback, useEffect, useRef, useState, ChangeEvent } from 'react';
import './DropdownMenu.css';
import { BiChevronDown } from 'react-icons/bi';
import { ReactComponent as DisplayIcon } from '../../icons_FEtask/Display.svg'

interface DropdownProps {
  grouping: string;
  setGrouping: (grouping: string) => void;
  ordering: string;
  setOrdering: (ordering: string) => void;
}

const DropdownMenu: React.FC<DropdownProps> = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const openDropdown = useCallback(() => {
    setVisible(true);
  }, []);

  const handleClickOutside = useCallback((event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setVisible(false);
    }
  }, []);

  const handleGroupingChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => setGrouping(e.target.value), []);
  const handleOrderingChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => setOrdering(e.target.value), []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className='dropdown-menu' ref={dropdownRef}>
      <div className='dropdown-label-container' onClick={openDropdown}>
      <DisplayIcon color='#6b6f76' />
        <div className='dropdown-label'>Display</div>
        <BiChevronDown color='#6b6f76' />
      </div>
      <div className={`dropdown-content-container ${visible ? 'visible' : ''}`}>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Grouping</div>
          <select value={grouping} onChange={handleGroupingChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Ordering</div>
          <select value={ordering} onChange={handleOrderingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;

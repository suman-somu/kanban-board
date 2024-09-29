import React, { useState, useEffect } from 'react';
import { fetchData } from '../../services/api';
import { groupTickets, sortTickets } from '../../utils/ticketUtils';
import Column from '../Column/Column';
import './Board.css';

const Board = ({ grouping, ordering }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      if (data) {
        setTickets(data.tickets);
        setUsers(data.users);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const grouped = groupTickets(tickets, grouping, users);
    const sortedGrouped = sortTickets(grouped, ordering);
    setGroupedTickets(sortedGrouped);
  }, [grouping, ordering, tickets, users]);

  return (
    <div className="board">
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <Column key={group} title={group} tickets={tickets} users={users} grouping={grouping} />
      ))}
    </div>
  );
};

export default Board;
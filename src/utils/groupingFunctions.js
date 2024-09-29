export const groupByStatus = (tickets) => {
    return tickets.reduce((acc, ticket) => {
        (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
        return acc;
    }, {});
};

export const groupByUser = (tickets, users) => {
    return tickets.reduce((acc, ticket) => {
        const user = users.find(user => user.id === ticket.userId);
        (acc[user.name] = acc[user.name] || []).push(ticket);
        return acc;
    }, {});
};

export const groupByPriority = (tickets) => {
    const priorityNames = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    return tickets.reduce((acc, ticket) => {
        (acc[priorityNames[ticket.priority]] = acc[priorityNames[ticket.priority]] || []).push(ticket);
        return acc;
    }, {});
};
import './MainSection.css'

const MainSection = ({ orders, handleCancelOrder }) => {
    const calculateTotalTime = order => {
        const totalTimeInSeconds = Object.values(order).filter(value => typeof value === 'number').reduce((acc, cur) => acc + cur, 0);
        const minutes = Math.floor(totalTimeInSeconds / 60);
        const seconds = totalTimeInSeconds % 60;
        return `${minutes} min ${seconds} sec`;
    };

    return (
        <div className="main-section">
            <h2>Main Section</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order Id
                        </th>
                        <th>Stage</th>
                        <th>Total Time Spent</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.status}</td>
                            <td>{order.status === 'Order Picked' ? calculateTotalTime(order) : '-'}</td>
                            <td>
                                {order.status !== 'Order Ready' && order.status !== 'Order Picked' && (
                                    <button onClick={() => handleCancelOrder(order.id)}>Cancel</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total Orders Delivered Today: {orders.filter(order => order.status === 'Order Picked').length}</p>
        </div>
    );
};

export default MainSection;

import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>Order {order._id} - Status: {order.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
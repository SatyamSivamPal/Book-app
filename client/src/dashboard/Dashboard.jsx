import React, { useState } from 'react';
import { Button, TextInput, Card } from 'flowbite-react';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    number: '123-456-7890',
  });

  const handleUpdate = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  return (
    <div className="container mt-8">
      <Card>
        <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
        <div>
          <label className="text-gray-600">Name:</label>
          <TextInput
            type="text"
            value={user.name}
            onChange={(e) => handleUpdate('name', e.target.value)}
            className="w-full mt-2"
          />
        </div>
        <div>
          <label className="text-gray-600">Email:</label>
          <TextInput
            type="email"
            value={user.email}
            onChange={(e) => handleUpdate('email', e.target.value)}
            className="w-full mt-2"
          />
        </div>
        <div>
          <label className="text-gray-600">Number:</label>
          <TextInput
            type="tel"
            value={user.number}
            onChange={(e) => handleUpdate('number', e.target.value)}
            className="w-full mt-2"
          />
        </div>
        <Button className="mt-4">Update Profile</Button>
      </Card>
    </div>
  );
};

export default Dashboard;

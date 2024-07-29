import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'User A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'User B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'User C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'User D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'User E', uv: 1890, pv: 4800, amt: 2181 },
];

const users = [
  { id: 1, name: 'User A', email: 'usera@example.com' },
  { id: 2, name: 'User B', email: 'userb@example.com' },
  { id: 3, name: 'User C', email: 'userc@example.com' },
  { id: 4, name: 'User D', email: 'userd@example.com' },
];

const AdminPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom color="black">
        ADMIN DASHBOARD
      </Typography>
      
      {/* Chart */}
      <Box sx={{ width: '100%', height: 300, mt: 4 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 20, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* User Table */}
      <TableContainer component={Paper} sx={{ mt: 4, width: '80%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminPage;

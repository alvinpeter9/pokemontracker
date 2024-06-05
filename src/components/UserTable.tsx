import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: "#18181B" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "whitesmoke" }}>
                #
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "whitesmoke" }}>
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "whitesmoke" }}>
                Username
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "whitesmoke" }}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{ fontSize: "1.1rem" }}>
                  {user.id}
                </TableCell>
                <TableCell sx={{ fontSize: "1.1rem" }}>
                  {user.name}
                </TableCell>
                <TableCell sx={{ fontSize: "1.1rem" }}>
                  {user.username}
                </TableCell>
                <TableCell sx={{ fontSize: "1.1rem" }}>
                  {user.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default UserTable;

// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Server is running');
// });
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });



// const express = require('express');
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// dotenv.config();


// const app = express();
// app.use(express.json());

// const users = [
//     { id: 1, name: 'Jeevan', email: 'jeevan@gmail.com', password: 'password1' },
//     { id: 2, name: 'Mayur', email: 'mayur@gmail.com', password: 'password2' },
//     { id: 3, name: 'Ashwani', email: 'ashwani@gmail.com', password: 'password3' }
//   ];
  
// app.get('/', (req, res) => {
//   res.send('Server is running');
// });
// app.get('/users', (req, res) => {
//   res.json(users); 
// });


// app.post('/users', (req, res) => {
//     console.log(req.body); // Check if this prints the incoming data
//     const newUser = req.body;  // Get the new user data from the request body
  
//     if (!newUser.name || !newUser.email) {
//       return res.status(400).send('Name and email are required');
//     }
  
//     newUser.id = users.length + 1;
//     users.push(newUser);
  
//     res.status(201).json(newUser);
//   });

//   app.get('/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id); // Get id from URL and convert to number
//     const user = users.find(u => u.id === userId); // Search user by id
  
//     if (!user) {
//       return res.status(404).send('User not found');
//     } 
  
//     res.json(user); // Return the found user
//   });


//   app.put('/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const { name, email } = req.body;
  
//     const userIndex = users.findIndex(u => u.id === userId);
  
//     if (userIndex === -1) {
//       return res.status(404).send('User not found');
//     }  
//     users[userIndex] = {
//       id: userId,
//       name,
//       email
//     };  
//     res.status(200).json(users[userIndex]);
//   });


//   app.patch('/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const updates = req.body;
  
//     const user = users.find(u => u.id === userId);
  
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
  
//     // Merge existing user with new updates
//     if (updates.name !== undefined) user.name = updates.name;
//     if (updates.email !== undefined) user.email = updates.email;
  
//     res.status(200).json(user);
//   });
  
//   app.delete('/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const userIndex = users.findIndex(u => u.id === userId);
  
//     if (userIndex === -1) {
//       return res.status(404).send('User not found');
//     }
  
//     users.splice(userIndex, 1); // Remove user from the array
//     res.status(204).send(); // No content
//   });


//   app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     console.log('Received email:', email);  // Log the email
//     console.log('Received password:', password);  // Log the password
  
//     const user = users.find(u => u.email === email && u.password === password);
  
//     if (!user) {
//       return res.status(401).send('Invalid credentials');
//     }
  
//     const token = jwt.sign(
//       { id: user.id, name: user.name, email: user.email },
//       process.env.JWT_SECRET, // Ensure JWT_SECRET is set correctly in your .env
//       { expiresIn: '1h' }
//     );
  
//     console.log('Generated token:', token);  // Log the generated token
  
//     res.status(200).json({ token }); // Send the token as the response
//   });
  
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });


const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Sample users data (with roles)
const users = [
  { id: 1, name: 'Jeevan', email: 'jeevan@gmail.com', password: 'password1', role: 'admin' },
  { id: 2, name: 'Mayur', email: 'mayur@gmail.com', password: 'password2', role: 'user' },
  { id: 3, name: 'Ashwani', email: 'ashwani@gmail.com', password: 'password3', role: 'user' }
];

// Login route to issue JWT with roles
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.status(200).json({ token });
});

// Middleware for role-based authorization
const verifyRole = (requiredRole) => {
  return (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    if (!token) {
      return res.status(401).send('Access Denied: No Token Provided');
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (req.user.role !== requiredRole) {
        return res.status(403).send('Forbidden: Insufficient Permissions');
      }

      next();
    } catch (err) {
      return res.status(401).send('Access Denied: Invalid Token');
    }
  };
};

// Protected routes
app.get('/admin', verifyRole('admin'), (req, res) => {
  res.send('Welcome, Admin!');
});

app.get('/user', verifyRole('user'), (req, res) => {
  res.send('Welcome, User!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

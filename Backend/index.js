import express from 'express';
import cors from 'cors';//prevent cors error
import loginRoute from './routes/login.js ';
import categoryRoute from './routes/category.js';
import userRoute from './routes/user.js';
import expenseRoute from './routes/expense.js';
import projectRoute from './routes/project.js';

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/login',loginRoute);
app.use('/category',categoryRoute);
app.use('/user',userRoute);
app.use('/projects/:projectId/expenses',expenseRoute);
app.use('/projects',projectRoute);
app.get('/', (req,res)=>{
  res.send('Hello from home page');
})

app.listen(PORT,() => console.log(`Server Running On Port: http://localhost:${PORT}`));



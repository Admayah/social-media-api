import express, {Request, Response} from 'express';

const app = express()

const port: number = 5000
console.log(port, 'port')

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to our social media app using nodejs and typescript')
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors"
import { usersRouter } from './routes/users.routes';
import './database';
import { sessionRoutes } from './routes/session.routes';
import { AppError } from './errors/AppErrors';
import cors from 'cors'
import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swagger.json';


const app = express()

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options))
app.use(express.json());
app.use("/users", usersRouter)
app.use(sessionRoutes)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    })
})

app.listen(3001, () => console.log('Server is Running'));
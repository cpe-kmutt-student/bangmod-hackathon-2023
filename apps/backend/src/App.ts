import { Server } from '@/Server';
import dotenv from 'dotenv';

dotenv.config();

new Server(3000).listen();

import dotenv from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";
import { resolve } from "node:path";

dotenv.config({
	path: [
		resolve(process.cwd(), ".env"),
		resolve(process.cwd(), "packages/db/.env"),
		resolve(process.cwd(), "../../packages/db/.env"),
	],
});

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
import dovenv from "dotenv";
dovenv.config({ path: ".env-dev" });

console.log(process.env.SOMETHING);
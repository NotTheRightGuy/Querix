//create an atom for connection string
import { atom } from "recoil";
const connectionString = atom({
  key: "connectionString",
  default: "postgres://postgres.wnbcdxihtfyqffzpvdgo:g0dN7XK4Ss977P8B@aws-0-ap-south-1.pooler.supabase.com:5432/postgres",
});

export default connectionString;

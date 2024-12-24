/**@type {import ('drizzle-kit').Config} */
export default {
    schema: './utils/schema.tsx',
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://Ai-content-generator_owner:rda3QmtV5jPf@ep-white-morning-a1ut3hp9.ap-southeast-1.aws.neon.tech/Ai-content-generator?sslmode=require'
    }
}
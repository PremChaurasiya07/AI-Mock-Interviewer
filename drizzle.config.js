/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:vF9hn4NHrxCs@ep-curly-hill-a5tnvrzt.us-east-2.aws.neon.tech/AI%20INTERVIEW%20APP?sslmode=require',
    }
  };
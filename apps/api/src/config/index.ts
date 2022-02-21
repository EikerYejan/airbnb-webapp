export const loadConfig = () => {
  return {
    apiKey: process.env.API_KEY,
    databaseUrl: process.env.DATABASE_URL,
    throttleTtl: process.env.THROTTLE_TTL,
    throttleLimit: process.env.THROTTLE_LIMIT,
  }
}

export type Config = ReturnType<typeof loadConfig>

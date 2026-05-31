export async function login(email: string, password: string) {
  return {
    id: crypto.randomUUID(),
    email,
    authenticated: true,
  };
}

export async function register(email: string, password: string) {
  return {
    id: crypto.randomUUID(),
    email,
    created: true,
  };
}

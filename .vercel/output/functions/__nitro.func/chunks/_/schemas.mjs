import { z } from 'zod';

const authSchema = z.object({
  email: z.string().email({ message: "Email is not valid field" }),
  password: z.string().min(8, { message: "Password is required and must be 8 character" })
});
const loginSchema = authSchema;
const registerSchema = authSchema.extend({
  name: z.string().min(1).max(255).default("")
});

export { loginSchema as l, registerSchema as r };
//# sourceMappingURL=schemas.mjs.map

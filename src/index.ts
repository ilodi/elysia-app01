import { Elysia } from "elysia";
import { users } from "./constants/userts";

const app = new Elysia()

app
  .group("/users", (app) => 
  app
    .get("/", ()=> users)
    .get("/:id", ({params})=> {
      const result = users.find((user) => user.id === Number(params.id));
      return result ?? "User not found";
    })
  )
  .group("/v1", (app) => 
  app
    .get("/", ()=> "Hello")
    .get("/about", ()=> "About")
    .get("/contact", ()=> "contact")
  )
  .group("/v2", (app) => 
    app
      .get("/", ()=> "🦊")
      .get("/me", ()=> "Hi 🦊")
    )
  .listen(3000);



console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

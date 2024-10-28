import { Elysia } from "elysia";

const app = new Elysia()

app
  .group("/users", (app) => 
  app
    .get("/", ()=> "User #")
    .get("/:id", ()=> "User AA")

  )
  .get("/", () => "Hello Elysia")

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

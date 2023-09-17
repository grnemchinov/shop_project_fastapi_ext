from fastapi import FastAPI
from routers import users, products
from routers import posts
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(users.router, tags=["Пользователи"])
app.include_router(posts.router, tags=["Публикации пользователей"])
app.include_router(products.router, tags=["Товары"])

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup():
    ...


@app.on_event("shutdown")
def shutdown():
    ...


if __name__ == '__main__':
    import uvicorn

    uvicorn.run(
        'main:app',
        host="127.0.0.1",
        port=8000,
    )

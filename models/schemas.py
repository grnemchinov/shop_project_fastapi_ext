from pydantic import BaseModel


class PostBase(BaseModel):
    title: str
    content: str
    user_id: int


class PostCreate(PostBase):
    pass


class Posts(PostBase):
    id: int


class UserBase(BaseModel):
    name: str

    class Config:
        orm_mode = True


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int

    class Config:
        orm_mode = True

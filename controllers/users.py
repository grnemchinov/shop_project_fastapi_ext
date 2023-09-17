from sqlalchemy import select, create_engine

from sqlalchemy.orm import Session

from models.models import User, Posts

engine = create_engine("sqlite:///database.db")

session = Session(engine)


def get_list():
    result = []
    statement = select(User)
    for user in session.scalars(statement):
        user_dict = {}
        posts = []
        user_dict["id"] = user.id
        user_dict["name"] = user.name
        statement_posts = select(Posts).where(Posts.user_id == user.id)
        for post in session.scalars(statement_posts):
            post_dict = {"id": post.id, "title": post.title, "content": post.content}
            posts.append(post_dict)
        user_dict["posts"] = posts
        result.append(user_dict)
    return result


def get_user(user_id: int):
    result = []
    statement_user = select(User).where(user_id == User.id)
    for user in session.scalars(statement_user):
        user_dict = {}
        posts = []
        user_dict["id"] = user.id
        user_dict["name"] = user.name
        statement_posts = select(Posts).where(Posts.user_id == user.id)
        for post in session.scalars(statement_posts):
            post_dict = {"id": post.id, "title": post.title, "content": post.content}
            posts.append(post_dict)
        user_dict["posts"] = posts
        result.append(user_dict)
    return result


def create_user(user_name: dict):
    with Session(engine) as session:
        user_full = User(name=user_name.get('name'))
        session.add_all([user_full])
        session.commit()
    result = "New user add"
    return result


def update_user(user: dict):
    id_user = user.get('id')
    user_name = user.get('name')
    statement = select(User).where(id_user == User.id)
    for user in session.scalars(statement):
        user.name = user_name
        session.commit()
    result = "User was updated"
    return result


def delete_user(user_id: dict):
    id_user = user_id.get('id')
    statement = select(User).where(id_user == User.id)
    for user in session.scalars(statement):
        session.delete(user)
        session.commit()
    result = "User was deleted"
    return result

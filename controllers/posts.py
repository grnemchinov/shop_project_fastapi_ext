from typing import Annotated

from sqlalchemy import create_engine, select

from sqlalchemy.orm import Session

from models.models import Posts

engine = create_engine("sqlite:///database.db")

session = Session(engine)


def get_list():
    result = []
    statement = select(Posts)
    for post in session.scalars(statement):
        post_dict = {"id": post.id, "title": post.title, "content": post.content, "user_id": post.user_id}
        result.append(post_dict)
    return result


def get_post(post_id: int):
    result = []
    statement_post = select(Posts).where(Posts.id == post_id)
    for post in session.scalars(statement_post):
        post_dict = {"id": post.id, "title": post.title, "content": post.content}
        result.append(post_dict)
    return result


def create_post(post: dict):
    user_id = post.get('user_id')
    post_title = post.get('title')
    post_content = post.get('content')
    new_post = Posts(title=post_title, content=post_content, user_id=user_id)
    session.add_all([new_post])
    session.commit()
    result = "The new post was added"
    return result


def update_post(post: dict):
    post_id = post.get('id')
    user_id = post.get('user_id')
    post_title = post.get('title')
    post_content = post.get('content')
    statement = select(Posts).where(post_id == Posts.id)
    for post in session.scalars(statement):
        if post_title == None:
            post.title = post.title
        else:
            post.title = post_title
        if post_content == None:
            post.content = post.content
        else:
            post.content = post_content
        if user_id == None:
            post.user_id = post.user_id
        else:
            post.user_id = user_id
        session.commit()
    result = "User was updated"
    return result


def delete_post(post_id: dict):
    id_post = post_id.get('id')
    statement = select(Posts).where(id_post == Posts.id)
    for post in session.scalars(statement):
        session.delete(post)
        session.commit()
    result = "User was deleted"
    return result
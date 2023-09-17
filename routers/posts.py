from fastapi import APIRouter

from controllers import posts

router = APIRouter()


@router.get("/posts")
def read_list():
    """получение списка пользователей"""
    result = posts.get_list()
    return result


@router.get("/posts/{id}")
async def read_post(post_id: int):
    result = posts.get_post(post_id)
    return result


@router.post("/posts")
def create(post: dict):
    """создание поста"""
    result = posts.create_post(post)
    return result


@router.put("/posts/{id}")
def update(post: dict):
    """обновление пользователя"""
    result = posts.update_post(post)
    return result


@router.delete("/posts/{id}")
def delete(post_id: dict):
    """удаление пользователя"""
    result = posts.delete_post(post_id)
    return result
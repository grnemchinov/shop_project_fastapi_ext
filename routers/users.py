from fastapi import APIRouter

from controllers import users

router = APIRouter()


@router.get("/users")
def read_list():
    """получение списка пользователей"""
    result = users.get_list()
    return result


@router.get("/users/{user_id}")
async def read_user(user_id: int):
    result = users.get_user(user_id)
    return result


@router.post("/users")
def create(user_name: dict):
    """создание пользователя"""
    result = users.create_user(user_name)
    return result


@router.put("/users/{id}")
def update(user: dict):
    """обновление пользователя"""
    result = users.update_user(user)
    return result


@router.delete("/users/{id}")
def delete(user_id: dict):
    """удаление пользователя"""
    result = users.delete_user(user_id)
    return result
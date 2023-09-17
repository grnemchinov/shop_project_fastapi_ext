from fastapi import APIRouter, Request

from controllers import products

router = APIRouter()


@router.get("/products/root")
def read_root():
    """получение списка"""
    result = products.get_tree()
    return result


@router.get("/products")
def read_list():
    """получение списка"""
    result = products.get_list()
    return result


@router.get("/products/{id}")
def read_product(id: int):
    product_id = id
    result = products.get_product(product_id)
    return result


@router.post("/products")
def create(product: dict):
    """создание поста"""
    result = products.create_product(product)
    return result


@router.put("/products/{id}")
def update(product: dict):
    """обновление пользователя"""
    result = products.update_product(product)
    return result


@router.delete("/products/{id}")
def delete(product_id: dict):
    """удаление пользователя"""
    result = products.delete_product(product_id)
    return result

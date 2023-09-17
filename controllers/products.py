from sqlalchemy import create_engine, select

from sqlalchemy.orm import Session

from models.models import Products
from tree import make_tree

engine = create_engine("sqlite:///database.db")

session = Session(engine)


def get_list():
    result = []
    statemen = select(Products)
    for product in session.scalars(statemen):
        product_dict = {"id": product.id, "text": product.name, "parent_id": product.parent_id}
        result.append(product_dict)
    return result


def get_tree():
    data = get_list()
    tree = make_tree(data=data, parent_id='parent_id', pk_key='id', add_checkboxes=False, sort_key='text')
    return tree


def get_product(product_id: int):
    result = []
    flag = False
    statemen = select(Products).where(Products.parent_id == product_id)
    statemen_all = select(Products)
    for product in session.scalars(statemen):
        for i in session.scalars(statemen_all):
            if product.id == i.parent_id:
                flag = True
        if flag is False:
            product_dict = {"id": product.id, "text": product.name, "parent_id": product.parent_id, "leaf": "true"}
            result.append(product_dict)
        else:
            product_dict = {"id": product.id, "text": product.name, "parent_id": product.parent_id}
            result.append(product_dict)
    return result


def create_product(product: dict):
    parent_id = product.get('parent_id')
    product_name = product.get('name')
    new_product = Products(name=product_name, user_id=parent_id)
    session.add_all([new_product])
    session.commit()
    result = "The new product was added"
    return result


def update_product(product: dict):
    product_id = product.get('id')
    parent_id = product.get('parent_id')
    product_name = product.get('name')
    statement = select(Products).where(product_id == Products.id)
    for product in session.scalars(statement):
        if product_name is None:
            product.name = product.name
        else:
            product.name = product_name
        if parent_id is None:
            product.parent_id = product.parent_id
        else:
            product.parent_id = parent_id
        session.commit()
    result = "User was updated"
    return result


def delete_product(product_id: dict):
    id_product = product_id.get('id')
    statement = select(Products).where(id_product == Products.id)
    for product in session.scalars(statement):
        session.delete(product)
        session.commit()
    result = "User was deleted"
    return result

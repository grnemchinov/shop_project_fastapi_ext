"""update_users_fk1

Revision ID: 7a1c0e191463
Revises: 534f9a7ce62f
Create Date: 2023-07-27 10:55:47.487798

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
from alembic.op import batch_alter_table

revision = '7a1c0e191463'
down_revision = '534f9a7ce62f'
branch_labels = None
depends_on = None


def upgrade() -> None:
    with batch_alter_table("posts") as batch_op:
        batch_op.add_column(sa.Column("user_id", sa.Integer))
        batch_op.create_foreign_key("fk_user_posts", "users", ["user_id"], ["id"])


def downgrade() -> None:
    pass

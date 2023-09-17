"""update_posts_fk

Revision ID: 534f9a7ce62f
Revises: 17d5116e8299
Create Date: 2023-07-27 10:50:09.046540

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
from alembic.op import batch_alter_table

revision = '534f9a7ce62f'
down_revision = '17d5116e8299'
branch_labels = None
depends_on = None


def upgrade() -> None:
    with batch_alter_table("posts") as batch_op:
        batch_op.create_foreign_key(
            "fk_user_posts",
            "users",
            ["user_id"],
            ["id"],
        )

def downgrade() -> None:
    pass

"""update_users_fk

Revision ID: 17d5116e8299
Revises: 43b228561d39
Create Date: 2023-07-27 10:04:18.216460

"""
from alembic import op
from alembic.op import batch_alter_table

revision = '17d5116e8299'
down_revision = '43b228561d39'
branch_labels = None
depends_on = None


def upgrade():
    with batch_alter_table("posts") as batch_op:
        batch_op.create_foreign_key(
            "fk_user_posts",
            "user",
            ["user_id"],
            ["id"],
        )


def downgrade():
    ...

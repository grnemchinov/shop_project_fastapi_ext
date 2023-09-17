"""parent_nullable

Revision ID: 86dd17262d62
Revises: cb6bbbe5d738
Create Date: 2023-09-14 20:54:40.196146

"""


# revision identifiers, used by Alembic.
from alembic.op import batch_alter_table

revision = '86dd17262d62'
down_revision = 'cb6bbbe5d738'
branch_labels = None
depends_on = None


def upgrade() -> None:
    with batch_alter_table("products") as batch_op:
        batch_op.alter_column("parent_id", nullable=True)


def downgrade() -> None:
    pass

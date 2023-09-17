"""create posts

Revision ID: 43b228561d39
Revises: 38453484a592
Create Date: 2023-07-27 09:25:35.785894

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '43b228561d39'
down_revision = '38453484a592'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'posts',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('title', sa.String(), nullable=False),
        sa.Column('content', sa.String(), nullable=False)
    )


def downgrade():
    op.drop_table('posts')
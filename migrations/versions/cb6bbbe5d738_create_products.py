"""create products

Revision ID: cb6bbbe5d738
Revises: 7a1c0e191463
Create Date: 2023-09-09 19:32:22.582230

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.

revision = 'cb6bbbe5d738'
down_revision = '7a1c0e191463'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'products',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('parent_id', sa.ForeignKey('products.id'), nullable=False)
    )


def downgrade():
    op.drop_table('products')

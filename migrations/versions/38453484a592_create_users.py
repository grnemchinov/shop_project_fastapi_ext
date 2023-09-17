"""create users

Revision ID: 38453484a592
Revises: b00328c2bd9f
Create Date: 2023-07-26 12:09:02.593778

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '38453484a592'
down_revision = 'b00328c2bd9f'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(), nullable=False)
    )


def downgrade():
    op.drop_table('users')
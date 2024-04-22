"""added_service_and_MUS

Revision ID: cee9f899c708
Revises: 7b5edca80a37
Create Date: 2024-04-22 22:07:39.867212

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'cee9f899c708'
down_revision: Union[str, None] = '7b5edca80a37'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    # Add 'ServiceTime' column to 'Spaceships' table
    op.add_column(
        'Spaceships',
        sa.Column('ServiceTime', sa.DateTime)
    )

    # Add 'ReviewDate' column to 'Crew_members' table
    op.add_column(
        'Crew_members',
        sa.Column('ReviewDate', sa.DateTime)
    )

def downgrade():
    # Remove 'ServiceTime' column from 'Spaceships' table
    op.drop_column('Spaceships', 'ServiceTime')

    # Remove 'ReviewDate' column from 'Crew_members' table
    op.drop_column('Crew_members', 'ReviewDate')

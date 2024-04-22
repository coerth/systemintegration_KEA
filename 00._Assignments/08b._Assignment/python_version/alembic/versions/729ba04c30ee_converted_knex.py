"""converted knex

Revision ID: 729ba04c30ee
Revises: 
Create Date: 2024-04-22 22:00:45.074544

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '729ba04c30ee'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    # create Spaceships table
    op.create_table(
        'Spaceships',
        sa.Column('SpaceshipID', sa.Integer, primary_key=True),
        sa.Column('SpaceshipName', sa.String(255)),
        sa.Column('SpaceshipSize', sa.Integer)
    )

    # create Crew_members table
    op.create_table(
        'Crew_members',
        sa.Column('Crew_membersID', sa.Integer, primary_key=True),
        sa.Column('SpaceshipID', sa.Integer, sa.ForeignKey('Spaceships.SpaceshipID')),
        sa.Column('Name', sa.String(255)),
        sa.Column('Age', sa.Integer)
    )

def downgrade():
    # drop Crew_members table
    op.drop_table('Crew_members')

    # drop Spaceships table
    op.drop_table('Spaceships')

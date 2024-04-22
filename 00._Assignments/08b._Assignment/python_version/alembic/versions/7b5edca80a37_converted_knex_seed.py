"""converted knex seed

Revision ID: 7b5edca80a37
Revises: 729ba04c30ee
Create Date: 2024-04-22 22:02:39.012882

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7b5edca80a37'
down_revision: Union[str, None] = '729ba04c30ee'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    # Inserts seed entries into Spaceships
    op.bulk_insert(
        sa.table(
            'Spaceships',
            sa.column('SpaceshipID', sa.Integer),
            sa.column('SpaceshipName', sa.String),
            sa.column('SpaceshipSize', sa.Integer)
        ),
        [
            {'SpaceshipID': 1, 'SpaceshipName': 'Millennium Falcon', 'SpaceshipSize': 34},
            {'SpaceshipID': 2, 'SpaceshipName': 'Star Destroyer', 'SpaceshipSize': 1600}
        ]
    )

    # Inserts seed entries into Crew_members
    op.bulk_insert(
        sa.table(
            'Crew_members',
            sa.column('Crew_membersID', sa.Integer),
            sa.column('SpaceshipID', sa.Integer),
            sa.column('Name', sa.String),
            sa.column('Age', sa.Integer)
        ),
        [
            {'Crew_membersID': 1, 'SpaceshipID': 1, 'Name': 'Han Solo', 'Age': 35},
            {'Crew_membersID': 2, 'SpaceshipID': 1, 'Name': 'Chewbacca', 'Age': 200},
            {'Crew_membersID': 3, 'SpaceshipID': 2, 'Name': 'Darth Vader', 'Age': 45}
        ]
    )

def downgrade():
    pass
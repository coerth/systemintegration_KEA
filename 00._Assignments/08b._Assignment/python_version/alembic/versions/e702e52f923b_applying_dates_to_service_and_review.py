"""applying dates to service and review

Revision ID: e702e52f923b
Revises: cee9f899c708
Create Date: 2024-04-22 22:11:20.793959

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e702e52f923b'
down_revision: Union[str, None] = 'cee9f899c708'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    # Add values to 'ServiceTime' column in 'Spaceships' table
    op.execute(
        "UPDATE Spaceships SET ServiceTime = '2022-01-01 00:00:00'"
    )

    # Add values to 'ReviewDate' column in 'Crew_members' table
    op.execute(
        "UPDATE Crew_members SET ReviewDate = '2022-01-01 00:00:00'"
    )

def downgrade():
    pass

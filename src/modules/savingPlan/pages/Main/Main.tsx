import { Default } from 'modules/common/layouts/Default';
import { Subtitle } from 'modules/common/components/Typography';
import { Colors } from 'modules/common/constants/Colors';
import { SavingGoalCard } from 'modules/savingPlan/components/SavingGoalCard/SavingGoalCard';
import { up } from 'styled-breakpoints';
import goalIcon from 'assets/icons/buy-a-house.svg';
import styled from 'styled-components';

export function Main() {
  return (
    <Default>
      <Title>
        {"Let's plan your"} <b> saving goal.</b>
      </Title>

      <Card goal="Buy a house" icon={goalIcon} onConfirm={console.log} />
    </Default>
  );
}

const Title = styled(Subtitle)`
  margin-top: 48px;
  color: ${Colors.brandColor.primary};
  margin-top: 32px;

  ${up('md')} {
    margin-top: 48px;
  }
`;

const Card = styled(SavingGoalCard)`
  margin-top: 24px;
`;

import { useState } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Heading, Paragraph } from 'modules/common/components/Typography';
import { ReachDate } from 'modules/savingPlan/components/ReachDate';
import { Amount } from 'modules/savingPlan/components/Amount';
import { Colors } from 'modules/common/constants/Colors';
import { SimulationCard } from 'modules/savingPlan/components/SimulationCard';

type Props = {
  icon: string;
  goal: string;
  onConfirm: (props: { amount: number; reachDate: Date }) => void;
} & React.HTMLAttributes<HTMLDivElement>;

function getNextMonth() {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  return nextMonth;
}

export function SavingGoalCard({
  icon,
  goal,
  onConfirm,
  ...otherProps
}: Props) {
  const [amount, setAmount] = useState('0');
  const [reachDate, setReachDate] = useState(getNextMonth());

  return (
    <Card {...otherProps}>
      <Header>
        <Image src={icon} aria-hidden={true} />
        <Info>
          <Heading variant={'small'} as={'h6'}>
            {goal}
          </Heading>
          <SubTitle>Saving goal</SubTitle>
        </Info>
      </Header>
      <Inputs>
        <Amount value={amount} onChange={setAmount} />
        <ReachDate value={reachDate} onChange={setReachDate} />
      </Inputs>
      <MontlyAmountSimulationCard
        amount={Number(amount)}
        reachDate={reachDate}
      />

      <Button
        onClick={() =>
          onConfirm({
            amount: Number(amount),
            reachDate,
          })
        }
      >
        Confirm
      </Button>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  max-width: 560px;
  height: auto;
  margin-top: 24px;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  background-color: ${Colors.white};
  padding: 24px 24px 40px 24px;

  ${up('md')} {
    padding: 35px 40px 40px 40px;
  }
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
`;

const Header = styled.div`
  display: flex;
  gap: 16px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SubTitle = styled(Paragraph)`
  color: ${Colors.blueGray[400]};
`;

const Inputs = styled.div`
  margin-top: 24px;
  gap: 16px;

  display: flex;
  flex-direction: column;

  ${up('md')} {
    display: grid;
    margin-top: 28px;
    grid-template-columns: 272px 192px 200px;
  }
`;

const MontlyAmountSimulationCard = styled(SimulationCard)`
  margin-top: 24px;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  background-color: ${Colors.brandColor.primary};
  border-radius: 32px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin: auto;
  margin-top: 32px;
  border: none;
  cursor: pointer;

  ${up('md')} {
    width: 320px;
  }
`;

import styled from 'styled-components';
import {
  Heading,
  Subtitle,
  Caption,
} from 'modules/common/components/Typography';
import { Colors } from 'modules/common/constants/Colors';
import { up } from 'styled-breakpoints';

type Props = {
  amount: number;
  reachDate: Date;
} & React.HTMLAttributes<HTMLDivElement>;

function formatAmount(amount: number) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

const SECONDS_IN_A_MONTH = 1000 * 60 * 60 * 24 * 30;

export function SimulationCard({ amount, reachDate, ...otherProps }: Props) {
  const now = new Date();
  const monthsUntilReachDate = Math.ceil(
    (reachDate.getTime() - now.getTime()) / SECONDS_IN_A_MONTH
  );

  const reachDateLabel = reachDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const montlyAmount = amount / monthsUntilReachDate;

  return (
    <Card {...otherProps}>
      <Info>
        <Subtitle>Monthly amount</Subtitle>
        <MontlyAmount>{formatAmount(montlyAmount)}</MontlyAmount>
      </Info>
      <CaptionWrapper>
        <Caption>
          You’re planning <b>{monthsUntilReachDate} monthly deposits</b> to
          reach your <b>{formatAmount(amount)}</b> goal by
          <b> {reachDateLabel}</b>.
        </Caption>
      </CaptionWrapper>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  border: 1px solid ${Colors.blueGray[50]};
  border-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  padding: 24px 32px 16px 32px;
`;

const CaptionWrapper = styled.div`
  background-color: ${Colors.blueGray[10]};
  padding: 24px 32px;
  text-align: center;

  ${up('md')} {
    text-align: unset;
  }
`;

const MontlyAmount = styled(Heading).attrs({
  variant: 'medium',
})`
  color: ${Colors.brandColor.secondary};
`;

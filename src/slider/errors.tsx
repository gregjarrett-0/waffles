import { Text } from '../text';

import { errorsWrapperStyle, errorStyle } from './styles';

type ErrorProps = {
  error: string[];
  id: string;
  inverted: boolean;
};

function Errors({ error, id, inverted }: ErrorProps) {
  return (
    <div css={errorsWrapperStyle()}>
      {error[0] && (
        <Text as="p" id={`${id}-0`} css={errorStyle({ inverted })}>
          {error[0]}
        </Text>
      )}
      {error[1] && (
        <Text as="p" id={`${id}-1`} css={errorStyle({ inverted })}>
          {error[1]}
        </Text>
      )}
    </div>
  );
}

export default Errors;

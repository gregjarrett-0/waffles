import { useId } from '../hooks';

import { progressStyle, wrapperStyle, progressWrapperStyle } from './styles';
import Steps from './steps';
import Label from './label';

type ProgressBaseProps = {
  /* The size of the progress. */
  /* @default medium */
  size?: 'small' | 'medium';
  /* The current value of the progress, which can also be a decimal. This is in relation to the `max` property. */
  /* @default 0 */
  value?: number;
  /* The maximum value of the progress. Must be greater than `value`. */
  /* @default 100 */
  max?: number;
  /* The mode in which the progress will display. In `continuous` mode, one single bar will be shown. In `steps` mode, multiple segments will be rendered and `max` and `value` are treated as the total and current steps respectively. */
  /* @default continuous */
  mode?: 'continuous' | 'steps';
  /* Custom label content to be shown instead of the original. */
  customLabel?: React.ReactNode | string;
  /* Whether the progress is inverted in color or not. */
  /* @default false */
  inverted?: boolean;
  /* [skip docs] */
  hideLabel?: boolean;
  /* Should always be provided with context of the progress, e.g. "Course Progress". */
  'aria-label': string;
} & React.HTMLAttributes<HTMLProgressElement>;

type ProgressNoLabelProps = {
  /* Whether to hide the default label or not. */
  /* @default false */
  hideLabel: boolean;
  'aria-label': string;
} & ProgressBaseProps;

type ProgressCustomLabelProps = {
  customLabel?: React.ReactNode | string;
  'aria-label'?: string;
} & ProgressBaseProps;

type ProgressProps =
  | ProgressBaseProps
  | ProgressNoLabelProps
  | ProgressCustomLabelProps;

function Progress({
  size = 'medium',
  mode = 'continuous',
  inverted = false,
  value = 0,
  max = 100,
  customLabel,
  hideLabel = false,
  'aria-label': ariaLabel,
  ...restProps
}: ProgressProps) {
  const progressId = `progress-${useId()}`;
  const isStepsMode = mode === 'steps';

  return (
    <div data-testid="progress-wrapper" css={wrapperStyle({ size, inverted })}>
      <div css={progressWrapperStyle()}>
        {isStepsMode && <Steps id={progressId} max={max} size={size} />}
        <progress
          id={progressId}
          css={progressStyle({ size, inverted, clipId: `${progressId}-clip` })}
          max={max}
          value={value}
          aria-label={
            isStepsMode
              ? ariaLabel.concat(
                  ' ',
                  `${Math.floor(value)} out of ${max} steps`,
                )
              : ariaLabel
          }
          aria-valuemin={0}
          aria-valuenow={value}
          aria-valuemax={max}
          {...restProps}
        />
      </div>
      {!hideLabel && (
        <Label {...{ id: progressId, isStepsMode, max, value, customLabel }} />
      )}
    </div>
  );
}

export default Progress;

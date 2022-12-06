import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Code } from '@datacamp/waffles/icon';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { ErrorBoundary } from '@datacamp/waffles/error-boundary';
import { Button } from '@datacamp/waffles/button';

import PreviewControls from './preview-controls';
import basicTheme from './editor-theme';
import Highlight from './editor-highlight';
import CodePreview from './code-preview';

const sectionStyle = css`
  margin-top: ${tokens.spacing.medium};
`;

type WrapperStyleOptions = {
  minHeight?: number;
  darkPreview: boolean;
};

function wrapperStyle({ minHeight, darkPreview }: WrapperStyleOptions) {
  return css`
    padding: ${tokens.spacing.medium};
    padding-bottom: ${tokens.spacing.xlarge};
    margin-top: ${tokens.spacing.medium};
    border-width: ${tokens.borderWidth.thin};
    border-style: solid;
    border-top-right-radius: ${tokens.borderRadius.medium};
    border-top-left-radius: ${tokens.borderRadius.medium};
    overflow: hidden;
    ${minHeight && `min-height: ${minHeight}px;`}
    background-color: ${darkPreview ? tokens.colors.navy : tokens.colors.white};
    border-color: ${darkPreview
      ? tokens.colors.navy
      : hexToRgba(tokens.colors.navy, 0.15)};
    border-bottom-color: ${hexToRgba(
      darkPreview ? tokens.colors.white : tokens.colors.navy,
      tokens.opacity.low,
    )};
  `;
}

const buttonContentStyle = css`
  text-align: center;
  width: 70px;
`;

type ExampleProps = {
  children: React.ReactNode;
  path: string;
  title: string;
  minHeight?: number;
  darkPreview?: boolean;
};

function Example({
  children,
  minHeight,
  path,
  title,
  darkPreview = false,
}: ExampleProps) {
  const [code, setCode] = useState('');
  const [isCodePreviewVisible, setCodePreviewVisibility] = useState(false);

  function toggleCodePreviewVisibility() {
    setCodePreviewVisibility(!isCodePreviewVisible);
  }

  useEffect(() => {
    // Load raw content of code example
    // Trim and remove eslint flags
    async function importExampleCode() {
      const rawCode = await import(`!!raw-loader!../examples/${path}.tsx`);
      const trimmedCode = rawCode.default
        .replace(/\/\* eslint-disable[^*].+\*\//, '')
        .trim();
      setCode(trimmedCode);
    }
    importExampleCode();
  }, [path]);

  return (
    <ErrorBoundary>
      <section css={sectionStyle}>
        <Heading size="large">{title}</Heading>
        <div css={wrapperStyle({ minHeight, darkPreview })}>{children}</div>
        {code && isCodePreviewVisible && (
          <CodePreview>
            <Highlight theme={basicTheme}>{code}</Highlight>
          </CodePreview>
        )}
        <PreviewControls>
          <Button
            variant="plain"
            size="small"
            iconLeft={<Code />}
            disabled={!code}
            onClick={toggleCodePreviewVisibility}
          >
            <div css={buttonContentStyle}>
              {isCodePreviewVisible ? 'Hide' : 'Show'} Code
            </div>
          </Button>
        </PreviewControls>
      </section>
    </ErrorBoundary>
  );
}

export default Example;

import React from 'react';
import getBrandGroup from 'helpers/brand-group';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Download } from '@datacamp/waffles/icon';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { Button } from '@datacamp/waffles/button';

import PreviewControls from './preview-controls';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
`;

const brandPreview = css`
  padding: ${tokens.spacing.medium};
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid
    ${hexToRgba(tokens.colors.navy, 0.15)};
  border-radius: ${tokens.borderRadius.medium};
`;

const brandWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${tokens.spacing.xsmall};
  height: 150px;
`;

const labelStyle = css`
  display: block;
  flex: 1;
  color: inherit;
  padding-top: ${tokens.spacing.small};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type BrandPreviewType = {
  name: string;
  brand: React.ReactNode;
};

function BrandPreview({ name, brand }: BrandPreviewType) {
  return (
    <div css={brandWrapperStyle}>
      {brand}
      <Text css={labelStyle}>{name}</Text>
    </div>
  );
}

type BrandGridProps = {
  brandType: string;
};

function BrandGrid({ brandType }: BrandGridProps) {
  return (
    <>
      <section css={wrapperStyle}>
        <div css={brandPreview}>
          {Object.entries(getBrandGroup(brandType)).map(([name, Brand]) => {
            return (
              <BrandPreview
                key={name}
                name={name}
                brand={<Brand height="100px" />}
              />
            );
          })}
        </div>
      </section>
      <PreviewControls>
        <Button
          as="a"
          size="small"
          variant="plain"
          href={`../../downloads/waffles-brand-bundle.zip`}
          download
          iconLeft={<Download />}
        >
          Download {brandType} Logos and Logomarks
        </Button>
      </PreviewControls>
    </>
  );
}

export default BrandGrid;

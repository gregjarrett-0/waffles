import React from 'react';
import getBrandGroup from 'helpers/brand-group';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Download } from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

import PreviewControls from './preview-controls';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
`;

const brandPreview = css`
  padding: ${tokens.spacing.medium};
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.transparentNavy};
  border-top-right-radius: ${tokens.borderRadius.medium};
  border-top-left-radius: ${tokens.borderRadius.medium};
`;

const brandWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${tokens.spacing.small};
  max-height: 150px;
`;

const labelStyle = css`
  display: block;
  flex: 1;
  color: inherit;
  padding: ${tokens.spacing.small};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-height: ${tokens.sizing.small};
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
            return <BrandPreview key={name} name={name} brand={<Brand />} />;
          })}
        </div>
      </section>
      <PreviewControls>
        <Button
          as="a"
          size="small"
          variant="plain"
          href={`../../downloads/waffles-${brandType.toLowerCase()}-brand-bundle.zip`}
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

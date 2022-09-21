import Head from 'next/head';
import LandingPageCard from 'components/landing-page-card';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Link } from '@datacamp/waffles/link';
import { mediaQuery, hexToRgba } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { ErrorBoundary } from '@datacamp/waffles/error-boundary';
import { ContentContainer } from '@datacamp/waffles/content-container';

const heroStyle = css`
  height: 480px;
  width: 100%;
  background: ${tokens.colors.yellowLight} url('/images/waffles-hero.svg')
    no-repeat;
  background-position: 75% 75%;
  background-size: cover;
  border-bottom: ${tokens.borderWidth.thin} solid
    ${hexToRgba(tokens.colors.navy, 0.15)};

  ${mediaQuery.aboveMedium} {
    background-position: right bottom;
  }

  ${mediaQuery.aboveLarge} {
    height: 600px;
  }
`;

const introStyle = css`
  padding: ${tokens.spacing.medium};
  background-color: ${tokens.colors.navy};

  ${mediaQuery.aboveSmall} {
    background-color: transparent;
  }

  ${mediaQuery.aboveMedium} {
    padding: ${tokens.spacing.xlarge};
  }

  max-width: 500px;
`;

const introHeadingStyle = css`
  color: ${tokens.colors.white};
  font-size: 40px;
  letter-spacing: -1px;
  line-height: ${tokens.lineHeights.tight};
  margin-bottom: ${tokens.spacing.medium};

  ${mediaQuery.aboveSmall} {
    color: ${tokens.colors.navy};
  } ;
`;

const introParagraphStyle = css`
  color: ${tokens.colors.white};
  margin-bottom: 0;

  ${mediaQuery.aboveSmall} {
    color: ${tokens.colors.navy};
  } ;
`;

const higlightStyle = css`
  color: ${tokens.colors.green};

  ${mediaQuery.aboveSmall} {
    color: ${tokens.colors.purple};
  } ;
`;

const containerStyle = css`
  display: block;

  ${mediaQuery.aboveLarge} {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 0 ${tokens.spacing.xlarge};
  }
`;

const cardsLayoutStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.medium};
`;

const cardParagraphStyle = css`
  margin-bottom: 0;
`;

export default function Home() {
  return (
    <ErrorBoundary>
      <Head>
        <title>Waffles - DataCamp Design System</title>
        <meta
          name="description"
          content="Evolution of Waffles design system."
        />
      </Head>
      <section css={heroStyle}>
        <div css={introStyle}>
          <Heading css={introHeadingStyle}>
            <span css={higlightStyle}>Waffles</span> is the DataCamp Design
            System.
          </Heading>
          <Paragraph size="large" css={introParagraphStyle}>
            It provides all the tools to build wonderful experiences that look,
            feel, sound, and smell like DataCamp.
          </Paragraph>
        </div>
      </section>
      <ContentContainer css={containerStyle}>
        <article>
          <Heading size="xlarge">Core principles</Heading>
          <div css={cardsLayoutStyle}>
            <LandingPageCard imageUrl="images/waffles-components-mini.svg">
              <Heading size="large">Components for every occassion</Heading>
              <Paragraph css={cardParagraphStyle}>
                Waffles offers a wide range of React and Figma components, to
                help developers and designers build DataCamp experiences
                together in a consistent way. Check a short{' '}
                <Link href="/overview/setup/">setup guide</Link> and get
                started—the best way to learn is just to start using the
                components!
              </Paragraph>
            </LandingPageCard>
            <LandingPageCard imageUrl="images/waffles-inclusive-mini.svg">
              <Heading size="large">Inclusive</Heading>
              <Paragraph css={cardParagraphStyle}>
                Accessibility is not an afterthought, but one of Waffles
                fundamental principles. A lot of effort is put into making sure
                components are accessible for all users, both with keyboard and
                screen reader. They are also tested in various browsers and
                devices.
              </Paragraph>
            </LandingPageCard>
            <LandingPageCard imageUrl="images/waffles-flexible-mini.svg">
              <Heading size="large">Flexible</Heading>
              <Paragraph css={cardParagraphStyle}>
                All React components come with sensible defaults out of the box.
                They are mimicking the behavior and API of native counterparts.
                In most cases, it is possible to customize their look with a
                little CSS.
              </Paragraph>
            </LandingPageCard>
          </div>
        </article>
      </ContentContainer>
    </ErrorBoundary>
  );
}

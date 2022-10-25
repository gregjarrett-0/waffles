import React from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Edit } from '@datacamp/waffles/icon';
import { useMediaQuery } from '@datacamp/waffles/hooks';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { ErrorBoundary } from '@datacamp/waffles/error-boundary';
import { ContentContainer } from '@datacamp/waffles/content-container';
import { Button } from '@datacamp/waffles/button';

import { TableOfContentsProvider } from '../context/table-of-contents-context';

import TableOfContents from './table-of-contents';
import PageHeader from './page-header';
import BackToTop from './back-to-top';

const GITHUB_EDIT_URL =
  'https://github.com/datacamp/waffles/edit/rc-next/doc-site/pages';

const containerStyle = css`
  display: block;
  padding-top: 0;

  ${mediaQuery.aboveMedium} {
    padding-top: 0;
    display: grid;
    grid-template-columns: minmax(400px, 3fr) 1fr;
    gap: 0 ${tokens.spacing.xlarge};
  }

  // Handle cases where a Notification component is at the top of the page content
  article > section[role='status'] {
    margin-top: ${tokens.spacing.large};
  }
`;

const footerStyle = css`
  display: flex;
  justify-content: flex-end;
  margin-top: ${tokens.spacing.large};
`;

type ContentLayoutProps = {
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
};

// Set of additional wrappers for markdown documentation pages
function ContentLayout({ title, description, children }: ContentLayoutProps) {
  const { pathname } = useRouter();
  const { isAboveLarge } = useMediaQuery();

  return (
    <ErrorBoundary>
      <PageHeader title={title} description={description} />
      <TableOfContentsProvider>
        <ContentContainer css={containerStyle}>
          <article>
            {children}
            <footer css={footerStyle}>
              <Button
                as="a"
                href={`${GITHUB_EDIT_URL}${pathname}.mdx`}
                variant="plain"
                size="small"
                iconLeft={<Edit />}
              >
                Edit This Page
              </Button>
            </footer>
          </article>
          {isAboveLarge && (
            <aside>
              <TableOfContents />
              <BackToTop />
            </aside>
          )}
        </ContentContainer>
      </TableOfContentsProvider>
    </ErrorBoundary>
  );
}

export default ContentLayout;

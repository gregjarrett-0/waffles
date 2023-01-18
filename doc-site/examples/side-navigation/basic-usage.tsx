import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { SideNavigation as SideNav } from '@datacamp/waffles/side-navigation';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { useMediaQuery } from '@datacamp/waffles/hooks';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Button } from '@datacamp/waffles/button';

const layoutStyle = css`
  display: block;
  // Set 'min-height: 100vh;' for real-world application

  ${mediaQuery.aboveMedium} {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

const contentStyle = css`
  background-color: ${tokens.colors.greyLight};
  padding: ${tokens.spacing.medium};
`;

// When working with react-router or in NextJS
// use useLocation or useRouter accordingly.
// For details check:
// https://github.com/datacamp-engineering/side-nav-workshop

function useHashLocation() {
  const [location, setLocation] = useState('');

  useEffect(() => {
    function handleHashChange() {
      setLocation(window.location.hash);
    }

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return location;
}

function Example() {
  const { isAboveMedium } = useMediaQuery();
  const [isOpen, setIsOpen] = useState(false);
  const location = useHashLocation();

  return (
    <div css={layoutStyle}>
      <SideNav isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SideNav.Nav>
          <SideNav.Category label="Getting Started" noDivider>
            <SideNav.Item isActive={location === '#progress'} href="#progress">
              Progress
            </SideNav.Item>
            <SideNav.Item
              isActive={location === '#bookmarks'}
              href="#bookmarks"
            >
              Bookmarks
            </SideNav.Item>
          </SideNav.Category>
          <SideNav.Category label="Learn">
            <SideNav.Item
              isActive={location === '#custom-tracks'}
              href="#custom-tracks"
            >
              Custom Tracks
            </SideNav.Item>
            <SideNav.Item
              isActive={location === '#assignments'}
              href="#assignments"
            >
              Assignments
            </SideNav.Item>
          </SideNav.Category>
        </SideNav.Nav>
      </SideNav>
      <article css={contentStyle}>
        <Paragraph>
          Resize the viewport to make mobile menu trigger button to appear /
          disappear.
        </Paragraph>
        {isAboveMedium ? null : (
          <Button onClick={() => setIsOpen(true)}>Open</Button>
        )}
      </article>
    </div>
  );
}

export default Example;

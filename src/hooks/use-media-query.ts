import { useState } from 'react';

import { tokens } from '../tokens';

import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect';

type Breakpoints = typeof tokens.breakpoints;

type Breakpoint = Breakpoints[keyof Breakpoints];

function mediaQueryStringFromBreakpoint(breakpoint: Breakpoint) {
  return `screen and (min-width: ${breakpoint})`;
}

const breakpointsToResultsMap = {
  isAboveSmall: mediaQueryStringFromBreakpoint(tokens.breakpoints.small),
  isAboveMedium: mediaQueryStringFromBreakpoint(tokens.breakpoints.medium),
  isAboveLarge: mediaQueryStringFromBreakpoint(tokens.breakpoints.large),
} as const;

type MediaMatchResults = Record<keyof typeof breakpointsToResultsMap, boolean>;

function initialMatchResults() {
  const keys = Object.keys(breakpointsToResultsMap);

  return keys.reduce((results, resultKey) => {
    return {
      ...results,
      [resultKey]: false,
    };
  }, {} as MediaMatchResults);
}

/**
 * For each breakpoint from design tokens (small, medium, large), determine if there is a media query match between it and a current viewport.
 *
 * Following mobile-first approach, when using the hook, consider base return without conditional rendering to be the mobile one.
 *
 * @returns Object of boolean values with `isAboveSmall`, `isAboveMedium`, and `isAboveLarge` entries
 */
function useMediaQuery() {
  const [matchResults, setMatchResults] = useState(initialMatchResults());

  useIsomorphicLayoutEffect(() => {
    function handleMediaChange() {
      const results = Object.keys(breakpointsToResultsMap).reduce(
        (results, resultKey) => {
          return {
            ...results,
            [resultKey]: window.matchMedia(
              breakpointsToResultsMap[resultKey as keyof MediaMatchResults],
            ).matches,
          };
        },
        {} as MediaMatchResults,
      );

      setMatchResults(results);
    }

    handleMediaChange();

    // Add event listeners for each breakpoint
    // Safari doesn't support addEventListener for matchMedia, so using addListener as a fallback

    Object.values(breakpointsToResultsMap).forEach((queryString) => {
      const media = window.matchMedia(queryString);

      try {
        media.addEventListener('change', handleMediaChange);
      } catch (err) {
        media.addListener(handleMediaChange);
      }
    });

    return () => {
      Object.values(breakpointsToResultsMap).forEach((queryString) => {
        const media = window.matchMedia(queryString);

        try {
          media.removeEventListener('change', handleMediaChange);
        } catch (err) {
          media.removeListener(handleMediaChange);
        }
      });
    };
  }, []);

  return matchResults;
}

export default useMediaQuery;

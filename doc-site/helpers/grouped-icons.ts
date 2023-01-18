type IconModule = Record<
  string,
  (props: Record<string, unknown>) => JSX.Element
>;

type GroupedIcons = {
  regular: IconModule;
  solid: IconModule;
};

// Split icons into regular and solid based on their names
function groupedIcons(allIcons: IconModule): GroupedIcons {
  return Object.entries(allIcons).reduce((groupedIcons, entry) => {
    const [name, Icon] = entry;

    if (name.toLowerCase().includes('solid')) {
      return {
        ...groupedIcons,
        solid: {
          ...groupedIcons.solid,
          [name]: Icon,
        },
      };
    }

    return {
      ...groupedIcons,
      regular: {
        ...groupedIcons.regular,
        [name]: Icon,
      },
    };
  }, {} as GroupedIcons);
}

export default groupedIcons;

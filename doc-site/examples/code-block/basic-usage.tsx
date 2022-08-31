import { CodeBlock } from '@datacamp/waffles/code-block';

function Example() {
  return (
    <CodeBlock>{`pyftsubset JetBrainsMono.ttf
--output-file="JetBrainsMono.woff"
--flavor=woff
--with-zopfli
--layout-features="kern,liga,clig,ccmp"
--unicodes="*"`}</CodeBlock>
  );
}

export default Example;

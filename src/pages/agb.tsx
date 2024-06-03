import { graphql, PageProps } from "gatsby";
import React from "react";

import { PageConfig } from "@atsnek/jaen";
import { Prose } from '@nikolovlazar/chakra-ui-prose'

import { MdxField } from "@atsnek/jaen-fields-mdx";

const AGBPage: React.FC<PageProps> = ({ path }) => {
  return (
    <>
      <MdxField
        name="mdx-content"
        components={{
          wrapper: ({ children }) => <Prose>{children}</Prose>,
        }}
      />
    </>
  );
};

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`;

export default AGBPage;

export { Head } from "@atsnek/jaen";

export const pageConfig: PageConfig = {
  label: "AGB | AGT Gun Trade",
  childTemplates: [],
};

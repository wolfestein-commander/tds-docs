import { nodes } from '@markdoc/markdoc';
import { DocImage } from '../../components';

export const image = {
  render: DocImage,
  attributes: nodes.image.attributes,
};

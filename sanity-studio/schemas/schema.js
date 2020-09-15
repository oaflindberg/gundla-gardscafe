import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import event from './event';
import menu from './menu';
import homepage from './homepage';
import catering from './catering';
import footer from './footer';
import navigation from './navigation';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    event,
    menu,
    homepage,
    catering,
    footer,
    blockContent,
  ]),
});

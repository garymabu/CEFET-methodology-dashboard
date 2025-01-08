import { ReactDefaultProps } from '@/app/interfaces/util/reactProps';
import Link from 'next/link';
import {forwardRef} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const InnerLink = forwardRef(function SafeInnerLink(props: any, _) {
  return(
    <a {...props} />
  );
});

export const SafeLink : React.FC<ReactDefaultProps & {href: string}> = ({href, children}) => (
  <Link passHref href={href}>
    <InnerLink>
      {children}
    </InnerLink>
  </Link>
);

export default SafeLink;
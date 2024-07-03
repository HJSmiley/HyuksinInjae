// import type{FC, ReactNode} from 'react';

// export type PProps = {
//   children?: ReactNode
// }

// const P:FC<PProps> = props => {
//   const {children} = props;
//   return <p children={children} />;
// }

// export default P;

import type { FC, PropsWithChildren, ReactNode } from "react";

export type PProps = {};

// 자식들에게 공통으로
const P: FC<PropsWithChildren<PProps>> = (props) => {
  return <p {...props} />;
};

export default P;

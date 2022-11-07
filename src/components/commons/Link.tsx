import { FC, HTMLProps } from 'react';

type Props = {
    color?: 'red' | 'green' | 'blue';
} & HTMLProps<HTMLAnchorElement>;

const Link: FC<Props> = ({ color = 'blue', children, style, ...restProps }) => (
    <a {...restProps} style={{ color, ...style }}>
        {children}
    </a>
);

export default Link;

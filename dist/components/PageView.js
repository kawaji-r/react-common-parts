import { jsx as _jsx } from "react/jsx-runtime";
export const PageView = (props) => {
    const { className, children } = props;
    return (_jsx("div", { className: className, style: { width: '100vw', height: '100vh' }, children: children }));
};

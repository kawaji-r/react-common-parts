import { jsx as _jsx } from "react/jsx-runtime";
export const CenterText = (props) => {
    const { className, children } = props;
    return (_jsx("div", { className: className, style: { display: 'grid', placeItems: 'center', height: '100%' }, children: _jsx("div", { children: children }) }));
};

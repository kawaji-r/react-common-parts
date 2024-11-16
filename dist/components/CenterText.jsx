"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenterText = void 0;
const CenterText = (props) => {
    const { className, children } = props;
    return (<div className={className} style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
      <div>{children}</div>
    </div>);
};
exports.CenterText = CenterText;

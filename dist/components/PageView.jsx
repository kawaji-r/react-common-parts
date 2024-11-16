"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageView = void 0;
const PageView = (props) => {
    const { className, children } = props;
    return (<div className={className} style={{ width: '100vw', height: '100vh' }}>
      {children}
    </div>);
};
exports.PageView = PageView;

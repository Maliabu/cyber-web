import React, { JSXElementConstructor } from "react";

type ReusableTabsElement = {
    id: string
    activeTab: string
    children: React.JSX.Element
}

export default function TabContent({id, activeTab, children}: ReusableTabsElement ){
    return (
        activeTab === id ? < div className = "TabContent" > { children } </div> :
        null
    );
};

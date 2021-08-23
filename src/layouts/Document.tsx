import { Switch, Route } from "react-router-dom";

import Sidebar from "components/Document/Sidebar";
import Overview from "views/doc/Overview";

export default function Document() {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
            {/* Header */}
            <div className="relative md:pt-32 pb-32 pt-12">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <Switch>
                        <Route path="/doc/overview" exact component={Overview} />
                    </Switch>
                </div>
            </div>
            </div>
        </>
        )
}

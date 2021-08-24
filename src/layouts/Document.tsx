import { Switch, Route, Redirect } from "react-router-dom";

import Sidebar from "components/Document/Sidebar";
import GettingStarted from "views/doc/GettingStarted"
import Markdown from "views/doc/Markdown";

export default function Document() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
            {/* Header */}
            <div className="md:pt-16 pb-32">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <Switch>
                        <Route path="/doc/overview" exact component={Markdown} />
                        <Route path="/doc/getting-started" exact component={GettingStarted} />
                        <Redirect from="/doc" to="/doc/overview" />
                    </Switch>
                </div>
            </div>
            </div>
        </>
        )
}

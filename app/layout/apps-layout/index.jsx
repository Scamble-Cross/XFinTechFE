import { useGlobalStateContext } from "~/context/GolobalStateProvider";
import TopNav from "~/layout/Header/TopNav";
import PageFooter from "~/layout/Footer/PageFooter";
import classNames from "classnames";
import { useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import Sidebar from "~/layout/Sidebar/Sidebar";
import { LiveReload, Outlet, useLocation, useNavigation } from "@remix-run/react";
import HkLoader from "~/@hk-components/@hk-loader/@HkLoader";

const AppsLayout = () => {
    const { states, dispatch } = useGlobalStateContext();
    const { pathname } = useLocation();
    const windowWidth = useWindowWidth();

    //remix
    const appRoutes = pathname.match('/apps/');
    const navigation = useNavigation();

    useEffect(() => {
        const isAppGroupPage = pathname.match('/apps/');
        if (isAppGroupPage && windowWidth >= 1200) {
            dispatch({ type: 'collapse_sidebar' });
        } else {
            dispatch({ type: 'expand_sidebar' });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowWidth, pathname]);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'data_hover', dataHover: states.layoutState.isSidebarCollapsed })
        }, 250);
    }, [dispatch, states.layoutState.isSidebarCollapsed])

    return (
        <>
            <div
                className={classNames("hk-wrapper", { "hk__email__backdrop": states.emailState.maximize }, { "hk-pg-auth": pathname === "/error-404" })}
                data-layout="vertical"
                data-navbar-style={states.layoutState.topNavCollapse ? "collapsed" : ""}
                data-layout-style={states.layoutState.isSidebarCollapsed ? "collapsed" : "default"}
                data-hover={states.layoutState.dataHover ? "active" : ""}
                data-menu="light"
                data-footer="simple"
            >
                {/* Page Loader */}
                {navigation.state !== "idle" ? <HkLoader loadingState={navigation.state} /> : null}
                {/* Top Navbar */}
                <TopNav />
                {/* Vertical Nav */}
                <Sidebar />
                {/* <VerticalNav /> */}
                <div className={classNames("hk-pg-wrapper", { "pb-0": appRoutes })} >
                    <Outlet />
                    {!appRoutes && <PageFooter />}
                </div>
            </div>
            <LiveReload />
        </>
    )
}

export default AppsLayout

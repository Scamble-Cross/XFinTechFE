import { Outlet, useLocation } from '@remix-run/react';
import classNames from 'classnames'

const AuthLayout = () => {
    const { pathname } = useLocation();
    const lockScreenAuth = pathname.match('/auth/lock-screen');

    return (
        <div className={classNames("hk-wrapper hk-pg-auth", { "bg-primary-dark-3": lockScreenAuth })} data-footer="simple" >
            <Outlet />
        </div>
    )
}

export default AuthLayout

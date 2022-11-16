import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = true;

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            {currentUser ? (
                <>
                    <SuggestedAccounts label="Suggested accounts" />
                </>
            ) : (
                <div className={cx('req-wrapper')}>
                    <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                    <Button outline large>
                        Log in
                    </Button>
                </div>
            )}
            <SuggestedAccounts label="Tài khoản được đề xuất" />
        </aside>
    );
}

export default Sidebar;

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountsItem.module.scss';

const cx = classNames.bind(styles);

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://www.bing.com/th?id=OIP.YChkHeEzhCYCkRFusy0NhAHaLG&w=138&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                className={cx('avatar')}
                alt="hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>nguyenvana</p>
            </div>
        </div>
    );
}

export default AccountsItem;

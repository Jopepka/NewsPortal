import headerFeed from './HeaderFeed.module.css';

const HeaderFeed = ({ title, description }) => {
    return (
        <div className={headerFeed.header}>
            <div className={headerFeed.header__title}>{title}</div>
            <div className={headerFeed.header__discription}>{description}</div>
        </div>
    )
}

export default HeaderFeed;

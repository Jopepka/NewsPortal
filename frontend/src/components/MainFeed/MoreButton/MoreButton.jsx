import moreButtonCSS from './MoreButton.module.css'

const MoreButton = ({ onClick }) => {
    return (
        <div className={moreButtonCSS.moreButton}>
            <button
                onClick={e => onClick()}
                className={moreButtonCSS.moreButton__button}>
                More topics
            </button>
        </div>
    )
}

export default MoreButton;

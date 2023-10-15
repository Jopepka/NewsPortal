import loaderCSS from './Loader.module.css'

const Loader = () => {
    return (
        <div className={loaderCSS.loader} >
            <div className={loaderCSS.loader__text}>LOADING</div>
            <div className={loaderCSS.loader__spinerBox}>
                <div className={loaderCSS.loader__spinerBox__spiner}></div>
            </div>
        </div>
    )

}

export default Loader;

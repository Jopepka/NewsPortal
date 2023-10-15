import footerCSS from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={footerCSS.footer}>
            <div>Alex Voronenko 2023</div>
            <a className={footerCSS.link} href="https://github.com/Jopepka/NewsPortal">GitHub</a>
        </footer>
    )
}

export default Footer;

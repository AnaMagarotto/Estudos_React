import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

{/*Nesse arquivo do projeto, vamos testar o uso dos Icons que podem ser utilizados pela bliblioteca React Icons - para usar baixe primeiramente pelo terminal utilizando a frase npm install react-icons*/}

function Footer() {

    return <footer>
        <ul className={styles.social_list}>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
        </ul>
        <p>Nosso rodape</p>
        </footer>
}

export default Footer